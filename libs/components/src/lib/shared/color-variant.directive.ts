import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import { ColorVariant } from '@cemiyet/core';

@Directive({
  selector: '[cemiyetColorVariant]'
})
export class ColorVariantDirective implements AfterViewInit {
  @Input('cemiyetColorVariant') variant: ColorVariant;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, this.variant.toLowerCase());
  }
}
