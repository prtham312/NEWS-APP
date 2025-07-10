import { Component } from '@angular/core';
import { NewsServiceService } from '../../services/news-service.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';



@Component({
  selector: 'app-tech',
  imports: [MatCardModule , SafeUrlPipe , CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
constructor(private news : NewsServiceService){}
techArticle : any[] = [];
selectedArticleUrl: string | null = null;
selectedArticle : any = null

isLoading = true;



ngOnInit(){
this.news.getTechNews().subscribe((res:any)=>{
  this.techArticle = res.articles;
  this.isLoading = false;
})
}
openInIframe(url: string): void {
  this.selectedArticleUrl = url;
  this.selectedArticle = null; 
}
}
