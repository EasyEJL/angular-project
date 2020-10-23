import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'liking-development',
  templateUrl: './liking-development.component.html',
  styleUrls: ['./liking-development.component.css']
})
export class LikingDevelopmentComponent implements OnInit {

  public developerForm: FormGroup;

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.developerForm = new FormGroup({
      rating: new FormControl(''),
      description: new FormControl('', [Validators.required]),
    });
    this.onChanges();
  }

  onChanges(): void {
    this.developerForm.get('rating').valueChanges.subscribe(() => {
      this.loggingService.LogNumericInputChanged();
    });
  }

  submit() {
    this.loggingService.LogFormSubmission();
  }
}
