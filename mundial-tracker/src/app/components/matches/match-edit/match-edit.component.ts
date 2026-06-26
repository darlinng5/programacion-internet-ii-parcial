import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { MatchesService } from '../../../services/matches.service';
import { TeamsService } from '../../../services/teams.service';
import { Team, GroupName } from '../../../interfaces/team.interface';
import { MatchStage, MatchStatus } from '../../../interfaces/match.interface';

@Component({
  selector: 'app-match-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './match-edit.component.html',
  styleUrl: './match-edit.component.css',
})
export class MatchEditComponent implements OnInit {
  form!: FormGroup;
  matchId!: number;
  teams: Team[] = [];
  groups: GroupName[] = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  stages: MatchStage[] = ['group','round-of-32','round-of-16','quarter-final','semi-final','third-place','final'];
  statuses: MatchStatus[] = ['scheduled','live','finished','postponed'];
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private matchesService: MatchesService,
    private teamsService: TeamsService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date:        ['', Validators.required],
      time:        ['', Validators.required],
      venue:       ['', Validators.required],
      city:        ['', Validators.required],
      homeTeamId:  [null, Validators.required],
      awayTeamId:  [null, Validators.required],
      homeScore:   [null],
      awayScore:   [null],
      group:       ['A'],
      stage:       ['group', Validators.required],
      status:      ['scheduled', Validators.required],
    });

    this.teamsService.getTeams().subscribe(teams => {
      this.teams = teams;
    });

    this.matchId = Number(this.route.snapshot.paramMap.get('id'));
    this.matchesService.getMatchById(this.matchId).subscribe(match => {
      this.form.patchValue({
        ...match,
        homeTeamId: match.homeTeam.id,
        awayTeamId: match.awayTeam.id,
      });
    });
  }

  updateMatch(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const raw = this.form.value;
    const dto = {
      ...raw,
      homeTeamId: Number(raw.homeTeamId),
      awayTeamId: Number(raw.awayTeamId),
      homeScore: raw.homeScore !== null && raw.homeScore !== '' ? Number(raw.homeScore) : null,
      awayScore: raw.awayScore !== null && raw.awayScore !== '' ? Number(raw.awayScore) : null,
    };

    this.matchesService.updateMatch(this.matchId, dto).subscribe({
      next: () => this.router.navigate(['/matches', this.matchId]),
      error: () => { this.error = 'Error al actualizar el partido.'; this.loading = false; },
    });
  }
}
