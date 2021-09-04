import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface Expense {
  text: string;
  amount: number;
}

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @ViewChild("text") text: any;
  @ViewChild("amount") amount: any;

  expenses: Expense[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.expenses.push({
      text: this.text.nativeElement.value,
      amount: this.amount.nativeElement.value
    });

    this.clearInputs();
  }

  clearInputs() {
    this.text.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }
}
