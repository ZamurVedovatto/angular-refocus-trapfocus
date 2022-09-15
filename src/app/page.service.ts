import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  actEl:any = null;

  constructor() {
    console.log('oageservice')
  }

  setActElement(el:any):void {
    this.actEl = el;
    console.log("setActElement", this.actEl)
  }

  onFocusActElement() {
    if (this.actEl) {
      this.actEl.focus()
    }
  }
}
