import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NewsService } from '../../../services/news.service';
import { News } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css',
})
export class NewsDetailComponent implements OnInit {
  item: News | null = null;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsService.getNewsById(id).subscribe(item => {
      this.item = item;
    });
  }
}
