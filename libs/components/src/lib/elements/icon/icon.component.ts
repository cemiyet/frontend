import { Component, Input, OnInit } from '@angular/core';

import { Icon, ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: Icon;
  @Input() size: FontSize = 'base';
  @Input() variant: ColorVariant = 'LIGHT';

  constructor() {}

  ngOnInit() {
    if (!this.icon) throw new Error('Icon type must be provided!');
  }
}
