import { Component, Input, OnInit } from '@angular/core';

import { Icon, ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: Icon;
  @Input() variant: ColorVariant;
  @Input() size: FontSize = 'base';

  constructor() {}

  ngOnInit() {
    if (!this.icon) throw new Error('Icon type must be provided!');
    if (!this.variant) throw new Error('Color variant must be provided!');
  }
}
