import { Component, OnInit, Input } from '@angular/core';

import { Color } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {
  @Input() fileName: string;
  @Input() creator: string;
  @Input() creatorLink: string;
  @Input() textColor: Color = 'kournikova';
  @Input() borderColor: Color = this.textColor;

  constructor() {}

  ngOnInit() {}
}
