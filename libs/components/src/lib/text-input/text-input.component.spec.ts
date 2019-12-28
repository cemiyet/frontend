import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// TODO: icon location directive should moved to shared module.
import { IconLocationDirective } from '../icon-location/icon-location.directive';

import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextInputComponent, IconLocationDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
