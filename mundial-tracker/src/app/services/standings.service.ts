import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Standing } from '../interfaces/standing.interface';
import { GroupName } from '../interfaces/team.interface';
import { environment } from '../../environments/environment';
import { MOCK_STANDINGS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class StandingsService {
  private apiUrl = `${environment.apiUrl}/standings`;

  constructor(private http: HttpClient) {}

  getAllStandings(): Observable<Standing[]> {
    // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
    return of(MOCK_STANDINGS);

    // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
    // return this.http.get<Standing[]>(this.apiUrl);
  }

  getStandingsByGroup(group: GroupName): Observable<Standing[]> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const standings = MOCK_STANDINGS.filter(s => s.group === group)
      .sort((a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor);
    return of(standings);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<Standing[]>(`${this.apiUrl}?group=${group}`);
  }
}
