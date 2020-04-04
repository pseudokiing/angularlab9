import { Injectable } from '@angular/core';
import {comicBookList} from '../contentDB';
import {Content} from '../content-card/content-helper';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOPtions = {
    headers: new HttpHeaders({ 'Content-type': 'applicaiton/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getContent() : Content [] {
  //   return comicBookList;
  // }
  getContentObs() : Observable<Content[]>{
    this.messageService.add('Content retreived, all heroes present at the Hall of Justice');
    return this.http.get<Content[]>('api/comics');
  }
  addComic(comics: Content): Observable<Content>{
    return this.http.post<Content>('api/comics', comics, this.httpOPtions);
  }
  updateComic(comics: Content): Observable<any>{
    return this.http.put('api/comics', comics, this.httpOPtions);
  }
  getContentItem(id: number): Observable<Content> {
    console.log('Retrieving OBSERVABLE content item', id);
    return this.http.get<Content>('api/content' + id);
  }
}
