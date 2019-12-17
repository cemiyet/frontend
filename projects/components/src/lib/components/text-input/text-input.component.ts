import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Color, TextAlignment } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-components-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent implements AfterViewInit {
  @Input() id: string;
  @Input() placeholder: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';

  @Input() bgColor: Color = 'space-shuttle';
  @Input() textColor: Color = 'kournikova';
  @Input() textAlignment: TextAlignment = 'left';

  @Input() icon: string;
  @Input() iconColor: Color = 'white-linen';
  @Input() iconLocation: 'left' | 'right';

  @Input() label: string;
  @Input() labelColor: Color = 'kournikova';

  @Input() error: string;
  @Input() hasError = false;

  @ViewChild('inputIcon', {static: false})
  inputIcon: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.inputIcon);
  }
}
