import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: Icon = 'perm_contact_calendar';

  constructor() {}

  ngOnInit() {}
}
