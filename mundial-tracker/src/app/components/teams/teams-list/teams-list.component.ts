import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TeamsService } from '../../../services/teams.service';
import { Team, GroupName } from '../../../interfaces/team.interface';

@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.css',
})
export class TeamsListComponent implements OnInit {
  teams: Team[] = [];
  filtered: Team[] = [];
  groups: GroupName[] = ['A','B','C','D','E','F','G','H','I','J','K','L'];
  selectedGroup: GroupName | 'all' = 'all';
  searchTerm = '';

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(teams => {
      this.teams = teams;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    this.filtered = this.teams.filter(t => {
      const matchGroup = this.selectedGroup === 'all' || t.group === this.selectedGroup;
      const matchSearch = t.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        || t.code.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchGroup && matchSearch;
    });
  }

  onGroupChange(event: Event): void {
    this.selectedGroup = (event.target as HTMLSelectElement).value as GroupName | 'all';
    this.applyFilter();
  }

  onSearch(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.applyFilter();
  }

  deleteTeam(id: number): void {
    if (!confirm('¿Eliminar este equipo?')) return;
    this.teamsService.deleteTeam(id).subscribe(() => {
      this.teams = this.teams.filter(t => t.id !== id);
      this.applyFilter();
    });
  }
}
