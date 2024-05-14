import { TestBed } from '@angular/core/testing';

import { StudentCrudService } from './student-crud.service';

describe('StudentCrudService', () => {
  let service: StudentCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
