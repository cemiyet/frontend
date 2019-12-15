import { Component, OnInit, Input } from '@angular/core';

import { FontSize } from '@cemiyet/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = 'pass text';
  @Input() textColor = 'toledo';
  @Input() bgColor = 'kournikova';
  @Input() fontSize: FontSize = 'l';

  constructor() { }

  ngOnInit() { }
}

