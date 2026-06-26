import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { TeamsService } from '../../../services/teams.service';
import { GroupName } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-team-edit',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './team-edit.component.html',
  styleUrl: './team-edit.component.css',
})
export class TeamEditComponent implements OnInit {
  form!: FormGroup;
  teamId!: number;
  groups: GroupName[] = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  confederations = ['UEFA','CONMEBOL','CONCACAF','CAF','AFC','OFC'];
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:          ['', [Validators.required, Validators.minLength(2)]],
      code:          ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      group:         ['A', Validators.required],
      confederation: ['UEFA', Validators.required],
    });

    this.teamId = Number(this.route.snapshot.paramMap.get('id'));
    this.teamsService.getTeamById(this.teamId).subscribe(team => {
      this.form.patchValue(team);
    });
  }

  updateTeam(): void {
    if (this.form.invalid) return;
    this.loading = true;

    this.teamsService.updateTeam(this.teamId, this.form.value).subscribe({
      next: () => this.router.navigate(['/teams', this.teamId]),
      error: () => { this.error = 'Error al actualizar el equipo.'; this.loading = false; },
    });
  }
}
