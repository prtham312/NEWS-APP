import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsServiceService } from '../../services/news-service.service';
import {MatCardModule} from '@angular/material/card';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, SafeUrlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private news : NewsServiceService){}
articles : any[] = []
featuredArticle: any;
top4Articles: any[] = [];
remainingArticles: any[] = [];
selectedArticleUrl: string | null = null;
selectedArticle : any = null


ngOnInit() : void {
  this.news.getWSJNews().subscribe((res:any) => {
  this.articles = res.articles;
  this.featuredArticle = this.articles[0];
  this.top4Articles = this.articles.slice(1, 5);
  this.remainingArticles = this.articles.slice(5);
  })
}
openInIframe(url: string): void {
  this.selectedArticleUrl = url;
  this.selectedArticle = null; 
}

}
