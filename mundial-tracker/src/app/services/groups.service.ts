import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Group } from '../interfaces/group.interface';
import { GroupName } from '../interfaces/team.interface';
import { environment } from '../../environments/environment';
import { MOCK_GROUPS } from './mock-data';

@Injectable({ providedIn: 'root' })
export class GroupsService {
  private apiUrl = `${environment.apiUrl}/groups`;

  constructor(private http: HttpClient) {}

  getGroups(): Observable<Group[]> {
    // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
    return of(MOCK_GROUPS);

    // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
    // return this.http.get<Group[]>(this.apiUrl);
  }

  getGroupById(id: number): Observable<Group> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const group = MOCK_GROUPS.find(g => g.id === id)!;
    return of(group);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<Group>(`${this.apiUrl}/${id}`);
  }

  getGroupByName(name: GroupName): Observable<Group> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const group = MOCK_GROUPS.find(g => g.name === name)!;
    return of(group);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<Group>(`${this.apiUrl}/name/${name}`);
  }
}
