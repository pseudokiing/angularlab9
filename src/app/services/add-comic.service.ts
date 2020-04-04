import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddComicService {

  //constructor() { }
  addComicMessage: string[] = [] ;

  //constructor() { }

  add(comicMessage: string){
    this.addComicMessage.push(comicMessage);
  }

  clear(){
    this.addComicMessage = [];
  }
}
