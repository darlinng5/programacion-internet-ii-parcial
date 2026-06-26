import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatchesService } from '../../services/matches.service';
import { TeamsService } from '../../services/teams.service';
import { Match } from '../../interfaces/match.interface';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  recentMatches: Match[] = [];
  upcomingMatches: Match[] = [];
  totalTeams = 0;

  constructor(
    private matchesService: MatchesService,
    private teamsService: TeamsService,
  ) {}

  ngOnInit(): void {
    this.matchesService.getMatches().subscribe(matches => {
      this.recentMatches  = matches.filter(m => m.status === 'finished').slice(0, 5);
      this.upcomingMatches = matches.filter(m => m.status === 'scheduled').slice(0, 5);
    });

    this.teamsService.getTeams().subscribe((teams: Team[]) => {
      this.totalTeams = teams.length;
    });
  }
}
