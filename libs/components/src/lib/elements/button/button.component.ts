import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Color, ColorVariant, FontSize } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() textColor: Color = 'toledo';
  @Input() bgColor: Color = 'kournikova';
  @Input() fontSize: FontSize = 'l';
  @Input() variant: ColorVariant = 'LIGHT';

  constructor(private el: ElementRef) {}
}
