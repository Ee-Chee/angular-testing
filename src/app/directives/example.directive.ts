import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective {
  @HostBinding("style.background-color") backgroundColor: string = 'red';

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'red';
  }
}
