import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public LogNumericInputChanged(){
    console.log("Numerical input has been changed");
  }

  public LogFormSubmission() {
    console.log("Button has been clicked");
  }
}
