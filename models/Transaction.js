export class Transaction { 
    constructor(date, from, to, narrative, amount) { 
        this.date = date; 
        this.from = from; 
        this.to = to; 
        this.narrative = narrative; 
        this.amount = parseFloat(amount); 
    }
}