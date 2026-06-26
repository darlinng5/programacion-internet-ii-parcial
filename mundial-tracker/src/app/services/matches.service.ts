import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Match, CreateMatchDto, UpdateMatchDto } from '../interfaces/match.interface';
import { GroupName } from '../interfaces/team.interface';
import { environment } from '../../environments/environment';
import { MOCK_MATCHES, MOCK_TEAMS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class MatchesService {
  private apiUrl = `${environment.apiUrl}/matches`;

  private mockMatches: Match[] = [...MOCK_MATCHES];
  private nextId = this.mockMatches.length + 1;

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
    return of([...this.mockMatches]);

    // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
    // return this.http.get<Match[]>(this.apiUrl);
  }

  getMatchById(id: number): Observable<Match> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const match = this.mockMatches.find(m => m.id === id)!;
    return of(match);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<Match>(`${this.apiUrl}/${id}`);
  }

  getMatchesByGroup(group: GroupName): Observable<Match[]> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    return of(this.mockMatches.filter(m => m.group === group));

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<Match[]>(`${this.apiUrl}?group=${group}`);
  }

  createMatch(dto: CreateMatchDto): Observable<Match> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const homeTeam = MOCK_TEAMS.find(t => t.id === dto.homeTeamId)!;
    const awayTeam = MOCK_TEAMS.find(t => t.id === dto.awayTeamId)!;
    const newMatch: Match = {
      id: this.nextId++,
      date: dto.date,
      time: dto.time,
      venue: dto.venue,
      city: dto.city,
      homeTeam,
      awayTeam,
      homeScore: dto.homeScore,
      awayScore: dto.awayScore,
      group: dto.group,
      stage: dto.stage,
      status: dto.status,
    };
    this.mockMatches.push(newMatch);
    return of(newMatch);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.post<Match>(this.apiUrl, dto);
  }

  updateMatch(id: number, dto: UpdateMatchDto): Observable<Match> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const index = this.mockMatches.findIndex(m => m.id === id);
    const homeTeam = dto.homeTeamId
      ? MOCK_TEAMS.find(t => t.id === dto.homeTeamId)!
      : this.mockMatches[index].homeTeam;
    const awayTeam = dto.awayTeamId
      ? MOCK_TEAMS.find(t => t.id === dto.awayTeamId)!
      : this.mockMatches[index].awayTeam;
    this.mockMatches[index] = { ...this.mockMatches[index], ...dto, homeTeam, awayTeam };
    return of(this.mockMatches[index]);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.put<Match>(`${this.apiUrl}/${id}`, dto);
  }

  deleteMatch(id: number): Observable<void> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    this.mockMatches = this.mockMatches.filter(m => m.id !== id);
    return of(undefined);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
