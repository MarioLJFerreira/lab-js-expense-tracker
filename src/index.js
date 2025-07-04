// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    getFormattedAmount(){
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry{
    constructor(date, amount, description){
        super(date, amount, description);
        this.type = 'income';
    }
}

// Expense
class Expense extends Entry{
    constructor (date, amount, description, paid){
        super(date,amount,description);
        this.paid = paid;
        this.type = 'expense'
    }
    getFormattedAmount(){
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor (){
        this.entries = [];
    }
    addEntry(entry){
        this.entries.push(entry);
    }
    getCurrentBalance() {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let entry of this.entries) {
      if (entry instanceof Income) {
        totalIncome += entry.amount;
      } else if (entry instanceof Expense) {
        totalExpenses += entry.amount;
      }
    }

    return totalIncome - totalExpenses;
}}
