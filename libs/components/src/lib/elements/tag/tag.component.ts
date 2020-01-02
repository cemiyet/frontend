import { Component, Input, OnInit } from '@angular/core';
import { ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() size: FontSize = 'xs';
  @Input() variant: ColorVariant = 'LIGHT';
  @Input() outline: boolean;

  constructor() {}

  ngOnInit() {
    this.outline = this.outline !== undefined;
  }
}
