import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {
    this.outline = this.outline !== undefined;
  }
}
