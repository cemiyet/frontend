import { Component, Input} from '@angular/core';

@Component({
  selector: 'cemiyet-components-logo',
  templateUrl: './logo.component.html'
})
export class LogoComponent {
  @Input() sideLength: number;
  @Input() borderRadius: number;
}
