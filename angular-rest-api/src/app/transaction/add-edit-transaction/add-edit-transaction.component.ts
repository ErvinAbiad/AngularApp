import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-add-edit-transaction',
  templateUrl: './add-edit-transaction.component.html',
  styleUrls: ['./add-edit-transaction.component.css'],
})
export class AddEditTransactionComponent implements OnInit {
  constructor(private service: TransactionService) {}
  @Input() transaction: Transaction = {
    TransactionID: 0,
    TransactionName: '',
    Cost: 0,
    Date: new Date(),
  };
  @Output() deactivateAddEditTransactionComp: EventEmitter<boolean> =
    new EventEmitter();
  public transactionModel: Transaction = {
    TransactionID: 0,
    TransactionName: '',
    Cost: 0,
    Date: new Date(),
  };

  public minDate = new Date();

  ngOnInit(): void {
    this.loadTransaction();
  }

  loadTransaction() {
    this.transactionModel.TransactionID = this.transaction.TransactionID;
    this.transactionModel.TransactionName = this.transaction.TransactionName;
    this.transactionModel.Cost = this.transaction.Cost;
    this.transactionModel.Date = this.transaction.Date;
  }
  addTransaction() {
    this.service.addTransaction(this.transactionModel).subscribe(
      (res) => {
        if (res) alert('Added Successfully');
        this.deactivateAddEditTransactionComp.emit(false);
      },
      (err) => {
        alert(err.error[0]?.ErrorMessage);
        console.log('error', err);
      }
    );
  }

  updateTransaction() {
    this.service.updateTransaction(this.transactionModel).subscribe(
      (res) => {
        if (res) alert('Updated Successfully');
        this.deactivateAddEditTransactionComp.emit(false);
      },
      (err) => {
        alert(err.error[0]?.ErrorMessage);
        console.log('error', err);
      }
    );
  }
}
