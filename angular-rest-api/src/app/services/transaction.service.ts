import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly apiUrl = 'https://localhost:44318/api/';

  constructor(private http: HttpClient) {}

  getTransactionList(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.apiUrl}Transaction/GetTransactions`
    );
  }

  getTransactionById(id: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `${this.apiUrl}Transaction/GetTransactionByID/${id}`
    );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<Transaction>(
      `${this.apiUrl}Transaction/InsertTransaction`,
      transaction,
      httpOptions
    );
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    const data = {
      transactionID: transaction.TransactionID,
      transactionName: transaction.TransactionName,
      cost: transaction.Cost,
      date: transaction.Date,
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<Transaction>(
      `${this.apiUrl}Transaction/UpdateTransaction/`,
      data,
      httpOptions
    );
  }

  deleteTransaction(id: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      `${this.apiUrl}Transaction/DeleteTransaction/${id}`,
      httpOptions
    );
  }
}
