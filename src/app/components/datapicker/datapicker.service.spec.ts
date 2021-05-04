import { TestBed } from '@angular/core/testing';

import { DatapickerService } from './datapicker.service';

describe('DatapickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatapickerService = TestBed.get(DatapickerService);
    expect(service).toBeTruthy();
  });
});
