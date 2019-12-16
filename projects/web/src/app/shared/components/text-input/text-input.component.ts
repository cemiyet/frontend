import { Component, Input, OnInit } from '@angular/core';

import { Color, TextAlignment } from '@cemiyet/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() inputType: 'text' | 'password' | 'email' = 'text';

  @Input() bgColor: Color;
  @Input() textColor: Color;
  @Input() textAlignment: TextAlignment = 'left';

  @Input() icon: string;
  @Input() iconColor: Color = 'white-linen';
  @Input() iconLocation: 'left' | 'right' = 'left';

  constructor() { }

  ngOnInit() { }
}
