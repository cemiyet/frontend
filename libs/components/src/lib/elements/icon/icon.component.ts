import { Component, Input } from '@angular/core';

import { Icon, ColorVariant } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon: Icon;
  @Input() variant: ColorVariant;

  constructor() {}
}
