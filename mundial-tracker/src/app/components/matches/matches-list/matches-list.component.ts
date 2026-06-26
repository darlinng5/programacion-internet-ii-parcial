import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatchesService } from '../../../services/matches.service';
import { Match, MatchStatus } from '../../../interfaces/match.interface';
import { GroupName } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-matches-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.css',
})
export class MatchesListComponent implements OnInit {
  matches: Match[] = [];
  filtered: Match[] = [];
  groups: Array<GroupName | 'all'> = ['all','A','B','C','D','E','F','G','H','I','J','K','L'];
  statuses: Array<MatchStatus | 'all'> = ['all','scheduled','live','finished'];
  selectedGroup: GroupName | 'all' = 'all';
  selectedStatus: MatchStatus | 'all' = 'all';

  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    this.matchesService.getMatches().subscribe(matches => {
      this.matches = matches;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    this.filtered = this.matches.filter(m => {
      const matchGroup  = this.selectedGroup === 'all' || m.group === this.selectedGroup;
      const matchStatus = this.selectedStatus === 'all' || m.status === this.selectedStatus;
      return matchGroup && matchStatus;
    });
  }

  onGroupChange(event: Event): void {
    this.selectedGroup = (event.target as HTMLSelectElement).value as GroupName | 'all';
    this.applyFilter();
  }

  onStatusChange(event: Event): void {
    this.selectedStatus = (event.target as HTMLSelectElement).value as MatchStatus | 'all';
    this.applyFilter();
  }

  getResult(match: Match): string {
    if (match.status !== 'finished' || match.homeScore === null) return 'vs';
    return `${match.homeScore} - ${match.awayScore}`;
  }

  statusLabel(status: MatchStatus): string {
    const labels: Record<MatchStatus, string> = {
      scheduled: 'Programado',
      live: 'En vivo',
      finished: 'Finalizado',
      postponed: 'Postpuesto',
    };
    return labels[status];
  }
}
