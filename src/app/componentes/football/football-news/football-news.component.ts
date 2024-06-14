import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { trigger, style, animate, transition } from '@angular/animations';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

@Component({
  selector: 'app-football-news',
  templateUrl: './football-news.component.html',
  styleUrls: ['./football-news.component.css'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('newsAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' })),
      ]),
    ]),
  ],
})
export class FootballNewsComponent implements OnInit {
  articles: Article[] = [];
  displayedArticles: Article[] = [];
  loading = true;
  private currentIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.http.get<any>('https://newsapi.org/v2/everything?q=futbol&language=es&apiKey=e7493892f4d24c76a5c8357e62c27c5c')
      .subscribe(data => {
        this.articles = data.articles.filter((article: Article) => this.isValidArticle(article));
        this.displayedArticles = this.articles.slice(0, 3);
        this.loading = false;
      });
  }

  isValidArticle(article: Article): boolean {
    const invalidKeywords = ['PESTAÑA', 'COMPONENTE', 'REMOVED'];
    const regex = new RegExp(invalidKeywords.join('|'), 'i');
    return !regex.test(article.title) && !regex.test(article.description);
  }

  loadMoreNews(): void {
    this.currentIndex += 3;
    if (this.currentIndex >= this.articles.length) {
      this.currentIndex = 0;
    }
    this.displayedArticles = [];
    setTimeout(() => {
      this.displayedArticles = this.articles.slice(this.currentIndex, this.currentIndex + 3);
    }, 500); // Duración de la animación de salida
  }
}
