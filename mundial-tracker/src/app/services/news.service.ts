import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { News } from '../interfaces/news.interface';
import { environment } from '../../environments/environment';
import { MOCK_NEWS } from './news-mock-data';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiUrl = `${environment.apiUrl}/news`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
    return of([...MOCK_NEWS].sort((a, b) => b.date.localeCompare(a.date)));

    // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
    // return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const item = MOCK_NEWS.find(n => n.id === id)!;
    return of(item);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<News>(`${this.apiUrl}/${id}`);
  }
}
