import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { IconLocation } from '@cemiyet/core';

@Directive({
  selector: '[cemiyetIconLocation]'
})
export class IconLocationDirective implements AfterViewInit {
  @Input('cemiyetIconLocation') iconLocation: IconLocation = 'left';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, `has-icon-${this.iconLocation}`);
  }
}
