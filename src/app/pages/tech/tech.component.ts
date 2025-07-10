import { Component } from '@angular/core';
import { NewsServiceService } from '../../services/news-service.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { LottieComponent }  from 'ngx-lottie'; 
import { NgIf } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-tech',
  imports: [MatCardModule , SafeUrlPipe , CommonModule , LottieComponent , NgIf],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
constructor(private news : NewsServiceService){}
techArticle : any[] = [];
selectedArticleUrl: string | null = null;
selectedArticle : any = null
isLoading = true;

lottieOptions : AnimationOptions = {
  path : 'https://lottie.host/5a387fdf-3a6e-4492-a37c-fd9d92fd0644/NAgbPDLboL.json'
}


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
