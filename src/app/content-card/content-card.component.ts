import { Component, OnInit, Input } from '@angular/core';
import { Content } from './content-helper';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() comic: Content;

  constructor() { }

  ngOnInit() {
  }

  displayId(): void {
    console.log(`Current ID is: `, this.comic.id);
  }

}
