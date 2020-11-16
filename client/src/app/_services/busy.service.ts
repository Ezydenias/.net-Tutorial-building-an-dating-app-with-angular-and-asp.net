import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  budyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.budyRequestCount++;
    this.spinnerService.show(undefined,
      {
        type: 'line-scale-party',
        bdColor: 'rgba(127,255,212,.6)',
        color: '#772953'
      });
  }

  idle() {
    this.budyRequestCount--;
    if (this.budyRequestCount <= 0) {
      this.budyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
