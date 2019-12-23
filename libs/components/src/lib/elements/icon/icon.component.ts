import { Component, Input, OnInit } from '@angular/core';

import { Icon, COLOR_VARIANT } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon: Icon;
  @Input() variant: COLOR_VARIANT;

  constructor() {}
}
