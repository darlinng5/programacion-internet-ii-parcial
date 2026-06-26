import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { MatchesService } from '../../../services/matches.service';
import { Match } from '../../../interfaces/match.interface';

@Component({
  selector: 'app-match-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './match-detail.component.html',
  styleUrl: './match-detail.component.css',
})
export class MatchDetailComponent implements OnInit {
  match: Match | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchesService: MatchesService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchesService.getMatchById(id).subscribe(match => {
      this.match = match;
    });
  }

  deleteMatch(): void {
    if (!this.match || !confirm('¿Eliminar este partido?')) return;
    this.matchesService.deleteMatch(this.match.id).subscribe(() => {
      this.router.navigate(['/matches']);
    });
  }

  statusLabel(status: string): string {
    const labels: Record<string, string> = {
      scheduled: 'Programado',
      live: 'En vivo',
      finished: 'Finalizado',
      postponed: 'Postpuesto',
    };
    return labels[status] ?? status;
  }
}
