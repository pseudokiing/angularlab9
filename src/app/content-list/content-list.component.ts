import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-helper';
import {ContentService} from '../services/content.service';
import { comicBookList } from '../contentDB';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  comicBookList: Content[];
  comicFilter: string;

  constructor(private contentService: ContentService) { 
    
  }

  ngOnInit() {
    this.contentService.getContentObs().subscribe(comicBookList => this.comicBookList = comicBookList);
  }

  findComic (name: string): void {
    this.comicFilter = this.comicBookList.filter(c => c.alias === name).length != 0 ? name + ` lives here :)` : name + ` is dead :(`
  }
  addComicToList(newComic: Content) {
    this.contentService.addComic(newComic).subscribe(c => {
      this.comicBookList.push(c);
    
    const myClonedArray = Object.assign([], this.comicBookList) // reassign array value from location in memory Array cloning
    console.log(this.comicBookList);
    this.comicBookList = myClonedArray;
   });
  }
  // save(): void {
  //   this.contentService.addComic(comics).subscribe(content => this.getContentObs.push(content));
  // }
  updateComicList(updatedComic: Content) {
    this.contentService.updateComic(updatedComic).subscribe(() => {
    const itemToUpdate = this.comicBookList.find(c => c.id === updatedComic.id)
    const itemUpdatedId = this.comicBookList.indexOf(itemToUpdate);
    this.comicBookList[itemUpdatedId] = updatedComic;
    const myClonedArray = Object.assign([], this.comicBookList);
    this.comicBookList = myClonedArray;
    console.log("Content updated");
  });
  // save(): void {
  //   this.contentService.updateComic(comics).subscribe(() => console.log("content updated"));
  // }
}

}
