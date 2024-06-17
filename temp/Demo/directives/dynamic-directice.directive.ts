import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]', standalone: true
})
export class DynamicComponentDirective implements OnInit {
  // @Input() backColor: string = 'pink'
  // @Input() color: string = 'red'
  @Input('appDynamicComponent') changeTextAndBackColor!: { backColor: string, textColor: string }

  //  if we need to do some logic with the value we need to use set
  @Input() set btnColor(color: string) {
    if (color === 'red') {
      this.renderer.addClass(this.element.nativeElement, 'changeColorClass')
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red')
  }
  // Host element is where we apply the directive, for example <div appDynamicComponent>test</div>
  // Here, this div is the host element.


  @HostListener('mouseenter') onMounseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.backColor)
  }

  @HostListener('mouseout') onMounseOut() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor)
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'pink'
  @HostBinding('style.padding') padding: string = '1rem'
}
