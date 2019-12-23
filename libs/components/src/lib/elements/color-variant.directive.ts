import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { ColorVariant, COLOR_VARIANTS } from '@cemiyet/core';

@Directive({
  selector: '[cemiyetColorVariant]'
})
export class ColorVariantDirective implements AfterViewInit {
  @Input('cemiyetColorVariant') variant: ColorVariant;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    let className: string;

    switch (this.el.nativeElement.localName) {
      case 'i':
        className = 'text-' + COLOR_VARIANTS[this.variant];
        break;
    }

    this.renderer.addClass(this.el.nativeElement, className);
  }
}
