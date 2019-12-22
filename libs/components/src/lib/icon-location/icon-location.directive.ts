import { Directive, HostBinding, Input, ElementRef } from '@angular/core';

import { IconLocation } from '@cemiyet/core';

@Directive({
  selector: '[cemiyetIconLocation]'
})
export class IconLocationDirective {
  @Input('cemiyetIconLocation') iconLocation: IconLocation = 'left';

  @HostBinding('class.left-0')
  @HostBinding('class.pl-2')
  public get isIconOnLeft(): boolean {
    return this.iconLocation === 'left' && this.el.nativeElement.localName === 'i';
  }

  @HostBinding('class.right-0')
  @HostBinding('class.pr-2')
  public get isIconOnRight(): boolean {
    return this.iconLocation === 'right' && this.el.nativeElement.localName === 'i';
  }

  @HostBinding('class.pl-10')
  public get hasIconOnLeft(): boolean {
    return this.iconLocation === 'left' && this.el.nativeElement.localName === 'input';
  }

  @HostBinding('class.pr-10')
  public get hasIconOnRight(): boolean {
    return this.iconLocation === 'right' && this.el.nativeElement.localName === 'input';
  }

  constructor(private el: ElementRef) {}
}
