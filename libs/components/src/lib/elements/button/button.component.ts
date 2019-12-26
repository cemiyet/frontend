import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Color, ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() fontSize: FontSize = 'base';
  @Input() variant: ColorVariant = 'LIGHT';
  @Input() outline: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.outline = this.outline !== undefined;

    if (!this.text) throw new Error('Text must be provided!');
  }
}
