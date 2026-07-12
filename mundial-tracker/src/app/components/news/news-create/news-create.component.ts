import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NewsService } from '../../../services/news.service';
import { NewsCategory } from '../../../interfaces/news.interface';

@Component({
  selector: 'app-news-create',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './news-create.component.html',
  styleUrl: './news-create.component.css',
})
export class NewsCreateComponent implements OnInit {
  form!: FormGroup;
  categories: NewsCategory[] = ['previa', 'resultados', 'jugadores', 'estadios', 'general'];
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private newsService: NewsService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title:    ['', [Validators.required, Validators.minLength(4)]],
      summary:  ['', [Validators.required, Validators.minLength(10)]],
      content:  ['', [Validators.required, Validators.minLength(20)]],
      date:     ['', Validators.required],
      author:   ['', Validators.required],
      category: ['general', Validators.required],
    });
  }

  createNews(): void {
    if (this.form.invalid) return;
    this.loading = true;

    this.newsService.createNews(this.form.value).subscribe({
      next: item => this.router.navigate(['/news', item.id]),
      error: () => { this.error = 'Error al crear la noticia.'; this.loading = false; },
    });
  }
}
