import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NewsService } from '../../../services/news.service';
import { News } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    });
  }
}
