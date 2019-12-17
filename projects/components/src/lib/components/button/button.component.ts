import { Component, OnInit, Input } from '@angular/core';

import { Color, FontSize } from '@cemiyet/core';


@Component({
  selector: 'cemiyet-components-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() textColor: Color = 'toledo';
  @Input() bgColor: Color = 'kournikova';
  @Input() fontSize: FontSize = 'l';

  constructor() { }

  ngOnInit() { }
}

