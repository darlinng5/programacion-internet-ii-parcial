import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { GroupsService } from '../../../services/groups.service';
import { MatchesService } from '../../../services/matches.service';
import { StandingsService } from '../../../services/standings.service';
import { StandingsTableComponent } from '../../standings/standings-table.component';
import { Group } from '../../../interfaces/group.interface';
import { Match } from '../../../interfaces/match.interface';
import { Standing } from '../../../interfaces/standing.interface';

@Component({
  selector: 'app-group-detail',
  standalone: true,
  imports: [RouterLink, StandingsTableComponent],
  templateUrl: './group-detail.component.html',
  styleUrl: './group-detail.component.css',
})
export class GroupDetailComponent implements OnInit {
  group: Group | null = null;
  matches: Match[] = [];
  standings: Standing[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService,
    private matchesService: MatchesService,
    private standingsService: StandingsService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.groupsService.getGroupById(id).subscribe(group => {
      this.group = group;
      this.matchesService.getMatchesByGroup(group.name).subscribe(m => {
        this.matches = m;
      });
      this.standingsService.getStandingsByGroup(group.name).subscribe(s => {
        this.standings = s;
      });
    });
  }

  getResult(match: Match): string {
    if (match.status !== 'finished' || match.homeScore === null) return 'vs';
    return `${match.homeScore} - ${match.awayScore}`;
  }
}
