import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[trapFocus]'
})
export class TrapFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  
  ngAfterViewInit() {
    this.trapFocus(this.el.nativeElement);
  }

  trapFocus(element: any) {
    setTimeout(function() {
      const focusableEls1 = element.querySelectorAll(
        'a, button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], input[type="button"], select, i[role="button"]'
      );
      const focusableEls = Array.from(focusableEls1)
      .filter( (el: any) => !el.disabled);
      const firstFocusableEl: any = focusableEls[0];  
      const lastFocusableEl: any = focusableEls[focusableEls.length - 1];
      firstFocusableEl.focus();
  
      element.addEventListener('keydown', function(e: any) {
        var isTabPressed = e.keyCode === 9;
        if (!isTabPressed) return;
  
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      });
    }, 0)
  }
}