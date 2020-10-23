import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikingDevelopmentComponent } from './liking-development.component';

describe('LikingDevelopmentComponent', () => {
  let component: LikingDevelopmentComponent;
  let fixture: ComponentFixture<LikingDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikingDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikingDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
