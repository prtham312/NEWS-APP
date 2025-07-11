import { Component } from '@angular/core';
import { NewsServiceService } from '../../services/news-service.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CoffeeLoaderComponent } from '../../shared/coffee-loader/coffee-loader.component';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Component({
  selector: 'app-tech',
  imports: [MatCardModule, CommonModule , CoffeeLoaderComponent],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
constructor(private news : NewsServiceService){}
techArticle : any[] = [];
selectedArticleUrl: string | null = null;
selectedArticle : any = null

isLoading = true;



ngOnInit() {
  this.news.getTechNews().pipe(
    catchError((error) => {
      console.error('API failed. Loading proxy data.', error);
      return of({ articles: this.getProxyTechNews() });
    })
  ).subscribe((res: any) => {
    if (res && res.articles) {
      this.techArticle = res.articles;
    }
    this.isLoading = false;
  });
}


getProxyTechNews() {
  return [
    {
      title: 'AI Breakthrough: Quantum Chips to Power Next-Gen Devices',
      publishedAt: new Date().toISOString(),
      description: 'Researchers unveil quantum chips that promise massive leaps in processing power.',
      url: 'https://www.yahoo.com/news/quantum-breakthrough-could-devices-1-060052452.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAKYbS95ZeN75zB0HDu3JdkMBXItDBB64PwSn8CMQwvu1Vbx2mZxne3-nHciymxaiDpVyi6ScbjUkxAwyrbNCpHlUapmm-y995qk3vvKTK_qV3rR52NO6UAkDiarsZJUlQ0a3s_fD94w4fTXBuBkgIo-ghdwitLjn3lHI9neyrwwq',
      urlToImage: '/newspaper.jpeg'
    },
    {
      title: 'Meta Introduces Holographic Calls With Ray-Ban Smart Glasses',
      publishedAt: new Date().toISOString(),
      description: 'A new update from Meta allows live holographic calls through their smart glasses.',
      url: 'https://www.indiatoday.in/technology/news/story/meta-plans-to-introduce-display-to-ray-ban-smart-glasses-in-2025-2654437-2024-12-24',
      urlToImage: '/newspaper.jpeg'
    },
    {
      title: 'Tesla’s Robot Optimus is Learning Household Chores',
      publishedAt: new Date().toISOString(),
      description: 'Elon Musk reveals demo of Optimus folding laundry and cooking breakfast.',
      url: 'https://builtin.com/robotics/tesla-robot',
      urlToImage: '/newspaper.jpeg'
    },
     {
      title: 'Google DeepMind introduces video-generating AI called Veo',
      publishedAt: new Date().toISOString(),
      description: 'Veo creates high-definition videos from text prompts, bringing generative video closer to reality.',
      url: 'https://deepmind.google/models/veo/',
      urlToImage: '/newspaper.jpeg'
    },
    {
      title: 'Elon Musk showcases Optimus Gen 2 robot with improved dexterity',
      publishedAt: new Date().toISOString(),
      description: 'Tesla’s humanoid robot Optimus now folds laundry and performs smooth hand gestures.',
      url: 'https://www.thehansindia.com/technology/tech-news/elon-musk-unveils-teslas-optimus-a-humanoid-robot-that-can-do-almost-anything-913713',
      urlToImage: '/newspaper.jpeg'
    },
    {
      title: 'NASA and SpaceX partner to develop autonomous AI Mars drone',
      publishedAt: new Date().toISOString(),
      description: 'The AI drone will help map terrain and collect samples autonomously.',
      url: 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/',
      urlToImage: '/newspaper.jpeg'
    },
    {
      title: 'Google I/O 2025: Gemini AI integrated into Android, Gmail, and more',
      publishedAt: new Date().toISOString(),
      description: 'Google pushes Gemini AI deeper into the ecosystem including Android, Gmail, and Workspace.',
      url: 'https://blog.google/technology/ai/io-2025-keynote/',
      urlToImage: '/newspaper.jpeg'
    }
  ];
}


}
