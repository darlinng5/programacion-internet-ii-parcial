import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { News, CreateNewsDto } from '../interfaces/news.interface';
import { environment } from '../../environments/environment';
import { MOCK_NEWS } from './news-mock-data';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiUrl = `${environment.apiUrl}/news`;

  // mock local para simular ids auto-incrementales
  private mockNews: News[] = [...MOCK_NEWS];
  private nextId = this.mockNews.length + 1;

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    // ── MOCK: retorna datos locales (sin backend) ──────────────────────────
    return of([...this.mockNews].sort((a, b) => b.date.localeCompare(a.date)));

    // ── HTTP: descomentar cuando el backend esté listo ─────────────────────
    // return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const item = this.mockNews.find(n => n.id === id)!;
    return of(item);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  createNews(dto: CreateNewsDto): Observable<News> {
    // ── MOCK ───────────────────────────────────────────────────────────────
    const newItem: News = { id: this.nextId++, ...dto };
    this.mockNews.push(newItem);
    return of(newItem);

    // ── HTTP ───────────────────────────────────────────────────────────────
    // return this.http.post<News>(this.apiUrl, dto);
  }
}
