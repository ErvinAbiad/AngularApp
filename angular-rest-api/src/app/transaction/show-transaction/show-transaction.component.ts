import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css'],
})
export class ShowTransactionComponent implements OnInit {
  @ViewChild('closeButton')
  closeButton!: ElementRef;
  constructor(private service: TransactionService) {}

  public transactionList: Transaction[] = [];
  ModalTitle = '';
  public activateAddEditTransactionComp: boolean = false;
  public transaction: Transaction = {
    TransactionID: 0,
    TransactionName: '',
    Cost: 0,
    Date: new Date(),
  };

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.transaction = {
      TransactionID: 0,
      TransactionName: '',
      Cost: 0,
      Date: new Date(),
    };
    this.ModalTitle = 'Add Transaction';
    this.activateAddEditTransactionComp = true;
  }

  editClick(item: Transaction) {
    this.transaction = item;
    this.ModalTitle = 'Edit Transaction';
    this.activateAddEditTransactionComp = true;
  }

  deleteClick(item: Transaction) {
    if (confirm('Are you sure??')) {
      this.service.deleteTransaction(item.TransactionID).subscribe((data) => {
        alert('Delete Successfully');
        this.refreshEmpList();
      });
    }
  }

  closeClick() {
    this.activateAddEditTransactionComp = false;
    this.refreshEmpList();
  }

  handleCloseModel() {
    this.closeButton.nativeElement.click();
  }

  refreshEmpList() {
    this.service.getTransactionList().subscribe((data) => {
      this.transactionList = data;
    });
  }
}
