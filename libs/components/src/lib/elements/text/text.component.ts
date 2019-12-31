import { Component, Input } from '@angular/core';
import { ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() size: FontSize = 'base';
  @Input() variant: ColorVariant = 'LIGHT';
}
