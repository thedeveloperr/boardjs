import { Injectable } from '@angular/core';

@Injectable()
export class ListRelatedService {
private idNum: number = 0;
constructor() {
  //
}

public generateId(): string {
  this.idNum += 1;
  return 'list-' + this.idNum;
}

}
