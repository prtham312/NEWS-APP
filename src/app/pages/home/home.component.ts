import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsServiceService } from '../../services/news-service.service';
import {MatCardModule} from '@angular/material/card';
import { CoffeeLoaderComponent } from '../../shared/coffee-loader/coffee-loader.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule , CoffeeLoaderComponent],
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
isLoading = true;


ngOnInit() : void {
  this.news.getWSJNews().subscribe((res:any) => {
  this.articles = res.articles;
  this.isLoading = false;
  this.featuredArticle = this.articles[0];
  this.top4Articles = this.articles.slice(1, 5);
  this.remainingArticles = this.articles.slice(5);
  })
}


}
