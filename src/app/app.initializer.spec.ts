import { TestBed, inject } from '@angular/core/testing';

import { AppConfigsService } from './app.initializer';

describe('AppConfigsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfigsService]
    });
  });

  it('should be created', inject([AppConfigsService], (service: AppConfigsService) => {
    expect(service).toBeTruthy();
  }));
});
