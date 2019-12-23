import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { COLOR_VARIANT } from '@cemiyet/core';

@Directive({
  selector: '[cemiyetColorVariant]'
})
export class ColorVariantDirective implements AfterViewInit {
  @Input('cemiyetColorVariant') variant: COLOR_VARIANT;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    switch (this.el.nativeElement.localName) {
      case 'i':
        this.renderer.addClass(this.el.nativeElement, 'text-' + this.variant);
        break;
    }
  }
}
