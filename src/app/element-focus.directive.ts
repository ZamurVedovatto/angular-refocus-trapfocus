import { Directive, HostListener } from '@angular/core';
import { PageService } from './page.service';

@Directive({
  selector: '[elementFocus]'
})
export class ElementFocusDirective {
  
  constructor(private pageService: PageService,) {}
  

  @HostListener("click", ["$event"])
  public onListenerTriggered(event: any): void {
    // this.onFocusOut.emit(true);
    console.log(event.target)
    this.pageService.setActElement(event.target)
  }
}