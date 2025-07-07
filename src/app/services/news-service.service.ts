import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http : HttpClient) {}
  private readonly apiKey = '330f230b06ef4fe185a883045d864f61';
  private readonly wsjUrl = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${this.apiKey}`;
  private readonly techUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`
  private readonly businessUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`
  private readonly sportUrl = `https://newsdata.io/api/1/latest?country=in&category=Sports&apikey=pub_b84d9e0665174a3a984c8b0a5b01872e`
  private readonly carsUrl = `https://newsapi.org/v2/everything?q=tesla&from=2025-06-04&sortBy=publishedAt&apiKey=${this.apiKey}`

  getWSJNews(): Observable<any> {
    return this.http.get(this.wsjUrl);
  }
  getTechNews() : Observable<any> {
    return this.http.get(this.techUrl);
  }
  getBusinessNews() : Observable<any> {
    return this.http.get(this.businessUrl);
  }
  getSportNews() : Observable<any> {
    return this.http.get(this.sportUrl);
  }
  getCarsNews() : Observable<any> {
    return this.http.get(this.carsUrl);
  }
  
}
