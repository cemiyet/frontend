import { Component, OnInit, Input } from '@angular/core';

import { Color, Icon, IconLocation, TextAlignment } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() id: string;
  @Input() placeholder = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';

  @Input() bgColor: Color = 'space-shuttle';
  @Input() textColor: Color = 'kournikova';
  @Input() textAlignment: TextAlignment = 'left';

  @Input() icon: Icon;
  @Input() iconLocation: IconLocation = 'left';

  @Input() label: string;
  @Input() labelColor: Color = 'kournikova';

  @Input() error: string;
  @Input() hasError = false;

  constructor() {}

  ngOnInit() {
    if (!this.id) throw new Error('Id must be provided!');
  }
}
