import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Standing } from '../../interfaces/standing.interface';

@Component({
  selector: 'app-standings-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './standings-table.component.html',
  styleUrl: './standings-table.component.css',
})
export class StandingsTableComponent {
  @Input() standings: Standing[] = [];
  @Input() showGroupColumn = false;
}
