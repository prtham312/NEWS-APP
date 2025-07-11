import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NewsServiceService } from '../../services/news-service.service';
import { CommonModule } from '@angular/common';
import { CoffeeLoaderComponent } from '../../shared/coffee-loader/coffee-loader.component';


@Component({
  selector: 'app-sports',
  imports: [MatCardModule, CommonModule , CoffeeLoaderComponent],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  sportsArticles: any[] = [];
  articles: any[] = [];
  readonly maxPages = 10;
  isLoading = true;

  constructor(private news: NewsServiceService) {}

  ngOnInit(): void {
    this.fetchAllSportsArticles(undefined, 0);
  }

  fetchAllSportsArticles(nextPage?: string, pageCount: number = 0): void {
    if (pageCount >= this.maxPages) {
      this.articles = this.sportsArticles.slice(0, 40);
      this.isLoading = false;
      console.log(`Stopped after ${this.maxPages} pages. Loaded ${this.articles.length} articles with images.`);
      return;
    }

    this.news.getSportNews(nextPage).subscribe({
      next: (res: any) => {
        const newArticlesWithImages = (res.results || []).filter(
          (article: any) => article.image_url && article.image_url.trim() !== ''
        );
        this.sportsArticles = this.sportsArticles.concat(newArticlesWithImages);

        if (this.sportsArticles.length >= 40) {
          this.articles = this.sportsArticles.slice(0, 40);
          this.isLoading = false;
          console.log('Loaded 40 articles with images.');
          return;
        }

        if (res.nextPage) {
          this.fetchAllSportsArticles(res.nextPage, pageCount + 1);
        } else {
          this.articles = this.sportsArticles;
          this.isLoading = false;
          console.log('No more pages. Final article count:', this.articles.length);
        }
      },
      error: (err) => {
        if (err.status === 429) {
          console.warn('Rate limit hit. Stopping requests.');
        } else {
          console.error('API error:', err);
        }
      }
    });
  }

  toggleFlip(event: MouseEvent, item: any) {
    item.flipped = !item.flipped;
  }
}
