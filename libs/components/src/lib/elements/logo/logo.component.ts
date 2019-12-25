import { Component, OnInit, Input } from '@angular/core';
import { ColorVariant } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() sideLength: number;
  @Input() borderRadius?: number;
  @Input() variant: ColorVariant = 'PRIMARY';

  constructor() {}

  ngOnInit() {
    if (!this.sideLength) throw new Error('Side length type must be provided!');
  }
}
