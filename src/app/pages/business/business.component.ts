import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { NewsServiceService } from '../../services/news-service.service';
import { CommonModule } from '@angular/common';
import { CoffeeLoaderComponent } from '../../shared/coffee-loader/coffee-loader.component';

@Component({
  selector: 'app-business',
  imports: [MatCardModule , SafeUrlPipe , CommonModule , CoffeeLoaderComponent],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  constructor(private news : NewsServiceService){}
  article :any[] = [];
  scrollArticle :any[] = [];
  remainingArticle :any[] = [];
  selectedArticleUrl: string | null = null;
  selectedArticle : any = null
  isLoading = true;
  

  ngOnInit() : void{
    this.news.getBusinessNews().subscribe((res:any)=>{
      this.article = res.articles;
      this.isLoading = false;
      this.scrollArticle = this.article.slice(0,7);
      this.remainingArticle = this.article.slice(7)
    })
  }

  openInIframe(url: string): void {
  this.selectedArticleUrl = url;
  this.selectedArticle = null; 
}
}
