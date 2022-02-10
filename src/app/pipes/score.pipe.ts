import { Pipe, PipeTransform } from '@angular/core';
import { __asyncValues } from 'tslib';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: number, ...args: unknown[]): string {
    // return null;
    return value < 0 ? "- " + Math.abs(value) : value > 0 ? "+ " + value : "+/- 0" ;
  }

}
