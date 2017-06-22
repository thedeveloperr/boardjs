import { Injectable } from '@angular/core';

@Injectable()
export class ListRelatedService {
idNum: number = 0;
constructor() { }

generateId(): string {
  this.idNum +=1;
  return "list-"+this.idNum;
}

}
