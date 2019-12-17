import { Component, Input } from '@angular/core';

import { Color } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-components-illustration',
  templateUrl: './illustration.component.html'
})
export class IllustrationComponent {
  @Input() fileName: string;
  @Input() creator: string;
  @Input() creatorLink: string;
  @Input() textColor: Color = 'kournikova';
  @Input() borderColor: Color = this.textColor;
}
