import {Pipe, PipeTransform} from '@angular/core';
import { Individu }          from './individu/individu';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'filterGroupe',
  pure:false
})
export class FilterGroupePipe implements PipeTransform{

  
  transform(value:Individu[], id:number): Individu[] {
     return value.filter(individu=>individu.idGroupe === id
    );
  }
}