import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'datepicker-disabled-repro';
  firstDate = new Date();

  datesDisabled: Date[] = [];

  public counter = 0;

  disableDates() {
    this.datesDisabled = [this.firstDate];
  }

  enableDates() {
    this.datesDisabled = [];
  }

  increaseCounter() {
    this.counter++;
  }
}
