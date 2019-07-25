import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasListComponent } from './contas/contas-list/contas-list.component';
import { DespesasListComponent } from './despesas/despesas-list/despesas-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContasNewComponent } from './contas/contas-new/contas-new.component';
import { DespesasNewComponent } from './despesas/despesas-new/despesas-new.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContasListComponent,
    DespesasListComponent,
    ContasNewComponent,
    DespesasNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    CurrencyPipe
  ],
  entryComponents: [ ContasNewComponent, DespesasNewComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
