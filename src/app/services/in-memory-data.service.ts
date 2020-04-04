import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { comicBookList } from '../contentDB';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const comics = comicBookList;
    return {comics};
  }
  genId(comics: Content[]): number {
    return comics.length > 0 ? Math.max(...comics.map(comics => comics.id)) + 1 : 2000;
  }
}
