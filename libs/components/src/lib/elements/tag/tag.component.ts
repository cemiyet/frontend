import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ColorVariant, FontSize, Icon, IconLocation } from '@cemiyet/core';

@Component({
  selector: 'cemiyet-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() size: FontSize = 'xs';
  @Input() variant: ColorVariant = 'LIGHT';
  @Input() removable: boolean;
  @Input() outline: boolean;

  @Input() icon: Icon;
  @Input() iconLocation: IconLocation;
  private iconVariant: ColorVariant = 'LIGHT';

  private hasIcon: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.removable = this.removable !== undefined;
    this.outline = this.outline !== undefined;
    this.hasIcon = this.removable || this.icon !== undefined;

    switch (this.variant) {
      case 'LIGHT':
      case 'PRIMARY':
      case 'SECONDARY':
        this.iconVariant = 'DARK';
        break;
    }

    if (this.outline) {
      this.iconVariant = this.variant;
    }
  }

  onRemoveClicked(event: Event) {
    event.stopImmediatePropagation();

    const element = this.el.nativeElement as HTMLElement;
    element.parentNode.removeChild(element);
  }
}
