import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class AppDropdownDirective {

  @HostBinding('class.open') openMenu: boolean = false;

  constructor(private elmRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    this.openMenu = !this.openMenu;
    console.log('On click of dropdown ', this.elmRef.nativeElement.style + " openMenu -", this.openMenu);
  //   if(this.openMenu)
  //     this.renderer.addClass(this.elmRef.nativeElement, 'open');
  //   else
  //     this.renderer.removeClass(this.elmRef.nativeElement, 'open');
  //
  }

  @HostListener('mouseleave') closeDropdownMenu() {
    console.log('On mouseleave of dropdown ', this.elmRef.nativeElement.style + " openMenu -", this.openMenu);
    this.openMenu = false;
  }
}
