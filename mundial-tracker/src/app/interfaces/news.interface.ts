export type NewsCategory = 'previa' | 'resultados' | 'jugadores' | 'estadios' | 'general';

export interface News {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;     // "2026-06-01"
  author: string;
  category: NewsCategory;
  imageUrl?: string;
}

export interface CreateNewsDto {
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  category: NewsCategory;
  imageUrl?: string;
}
