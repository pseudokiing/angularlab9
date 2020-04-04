import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-helper';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(comicBookList: Content[], filterGenre: string = `Tech`): Content[] {
     return comicBookList.filter(comic => comic.genre === filterGenre);
  }
}
