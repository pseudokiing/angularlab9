import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-helper';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(comic: Content, defaultType: string = 'Tech'): string {
    return comic.genre || defaultType;
  }

}
