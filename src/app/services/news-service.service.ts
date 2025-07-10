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

  getWSJNews(): Observable<any> {
    return this.http.get(this.wsjUrl);
  }
  getTechNews() : Observable<any> {
    return this.http.get(this.techUrl);
  }
  getBusinessNews() : Observable<any> {
    return this.http.get(this.businessUrl);
  }
  getSportNews(nextPage?: string): Observable<any> {
  let url = 'https://newsdata.io/api/1/latest?country=in&category=Sports&apikey=pub_b29fda722ea54c248e4d054d6df8ae97';
  if (nextPage) {
    url += `&page=${nextPage}`;
  }
  return this.http.get(url);
}
  
}
