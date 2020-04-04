import { TestBed } from '@angular/core/testing';

import { AddComicService } from './add-comic.service';

describe('AddComicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddComicService = TestBed.get(AddComicService);
    expect(service).toBeTruthy();
  });
});
