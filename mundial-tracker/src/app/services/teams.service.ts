import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Team, CreateTeamDto, UpdateTeamDto } from '../interfaces/team.interface';
import { environment } from '../../environments/environment';
import { MOCK_TEAMS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private apiUrl = `${environment.apiUrl}/teams`;

  // mock local para simular ids auto-incrementales
  private mockTeams: Team[] = [...MOCK_TEAMS];
  private nextId = this.mockTeams.length + 1;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
    return of([...this.mockTeams]);

    // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
    // return this.http.get<Team[]>(this.apiUrl);
  }

  getTeamById(id: number): Observable<Team> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const team = this.mockTeams.find(t => t.id === id)!;
    return of(team);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<Team>(`${this.apiUrl}/${id}`);
  }

  createTeam(dto: CreateTeamDto): Observable<Team> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const newTeam: Team = { id: this.nextId++, ...dto };
    this.mockTeams.push(newTeam);
    return of(newTeam);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.post<Team>(this.apiUrl, dto);
  }

  updateTeam(id: number, dto: UpdateTeamDto): Observable<Team> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const index = this.mockTeams.findIndex(t => t.id === id);
    this.mockTeams[index] = { ...this.mockTeams[index], ...dto };
    return of(this.mockTeams[index]);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.put<Team>(`${this.apiUrl}/${id}`, dto);
  }

  deleteTeam(id: number): Observable<void> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    this.mockTeams = this.mockTeams.filter(t => t.id !== id);
    return of(undefined);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
