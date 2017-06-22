/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListRelatedService } from './list-related.service';

describe('Service: ListRelated', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListRelatedService]
    });
  });

  it('should ...', inject([ListRelatedService], (service: ListRelatedService) => {
    expect(service).toBeTruthy();
  }));
});
