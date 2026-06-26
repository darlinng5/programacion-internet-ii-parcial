import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TeamsService } from '../../../services/teams.service';
import { MatchesService } from '../../../services/matches.service';
import { Team } from '../../../interfaces/team.interface';
import { Match } from '../../../interfaces/match.interface';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
})
export class TeamDetailComponent implements OnInit {
  team: Team | null = null;
  matches: Match[] = [];

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private matchesService: MatchesService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.teamsService.getTeamById(id).subscribe(team => {
      this.team = team;
      this.matchesService.getMatches().subscribe(all => {
        this.matches = all.filter(
          m => m.homeTeam.id === id || m.awayTeam.id === id
        );
      });
    });
  }

  getResult(match: Match): string {
    if (match.status !== 'finished' || match.homeScore === null) return '-';
    return `${match.homeScore} - ${match.awayScore}`;
  }
}
