export class Account {
    constructor(name) {
      this.name = name;
      this.balance = 0;
      this.transactions = [];
    }
  
    addTransaction(transaction) {
      this.transactions.push(transaction);
      if (transaction.from === this.name) {
        this.balance -= transaction.amount;
      }
      if (transaction.to === this.name) {
        this.balance += transaction.amount;
      }
    }
  }
 