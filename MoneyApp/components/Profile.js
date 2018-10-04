export default class Profile{
    constructor(balance){
        this.balance = balance;
        this.transactions = [];
    }
}

getBalance = () => {
    return this.balance;
}
getTransactions = () => {
    return this.transactions;
}

addTransaction = (transaction) => {
    this.transactions.push(transaction);
}