import {inject, TestBed} from '@angular/core/testing';

import {LogInRegisterService} from './log-in-register.service';

describe('LogInResisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInRegisterService],
    });
  });

  it('should be created', inject([LogInRegisterService], (service: LogInRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
