import { Component, Input, OnInit } from '@angular/core';

import { Color, TextAlignment } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-components-text-input',
  templateUrl: './text-input.component.html'
})
export class TextInputComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder = '';
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

  constructor() { }

  ngOnInit() { }
}
