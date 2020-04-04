import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';



@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
id: number;
comic: Content;
  constructor(private route: ActivatedRoute, private contentService: ContentService) { 
    this.comic = {
      alias: '',
      name: '',
      genre: '',
      body: '',
      imgUrl: ''
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.contentService.getContentItem(this.id).subscribe( c => {this.comic = c;
      console.log(this.comic);
    });
    });
  }

}
