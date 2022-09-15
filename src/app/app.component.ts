import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { PageService } from './services/page.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-content',
  template: `
    <div trapFocus>
      <div class="modal-header">
        <h4 class="modal-title pull-left">{{title}}</h4>
        <button type="button" class="btn-close close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
          <span aria-hidden="true" class="visually-hidden">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          abc
          <button>a</button>
          <button>a</button>
          <button>a</button>
          <button>a</button>
          <button>a</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">{{closeBtnName}}</button>
      </div>
    </div>
  `
})
 
export class ModalContentComponent implements OnInit {
  title?: string;
  closeBtnName?: string;
  list: any[] = [];
 
  constructor(
    public bsModalRef: BsModalRef,
    public pageService: PageService
    ) {}
 
  ngOnInit() {
  }

  ngOnDestroy() {
    this.pageService.onFocusActElement();
  }

}