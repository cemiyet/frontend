import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() size: FontSize = 'base';
  @Input() variant: ColorVariant = 'LIGHT';
  @Input() outline: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.outline = this.outline !== undefined;
  }
}
