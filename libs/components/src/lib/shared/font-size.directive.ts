import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { FontSize } from '@cemiyet/core';

@Directive({
  selector: '[cemiyetFontSize]'
})
export class FontSizeDirective implements AfterViewInit {
  @Input('cemiyetFontSize') size: FontSize;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, `text-${this.size}`);
  }
}
