import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ElementFocusDirective } from './directives/element-focus.directive';
import { TrapFocusDirective } from './directives/trap-focus.directive';
import { PageService } from './services/page.service';


@NgModule({
  declarations: [
    AppComponent,
    ElementFocusDirective,
    TrapFocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
