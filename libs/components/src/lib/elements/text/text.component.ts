import { AfterViewInit, Component, Input } from '@angular/core';
import { ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements AfterViewInit {
  @Input() text: string;
  @Input() size: FontSize = 'base';
  @Input() variant: ColorVariant = 'LIGHT';

  constructor() {}

  ngAfterViewInit() {
    if (!this.text) throw new Error('Text must be provided!');
  }
}
