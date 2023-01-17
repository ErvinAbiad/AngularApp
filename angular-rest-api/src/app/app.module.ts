import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddEditTransactionComponent } from './transaction/add-edit-transaction/add-edit-transaction.component';
import { ShowTransactionComponent } from './transaction/show-transaction/show-transaction.component';
import { TransactionService } from './services/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    AddEditTransactionComponent,
    ShowTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
