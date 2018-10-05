export default class Profile{
    constructor(balance){
        this.balance = balance;
        this.transactions = [];
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

    setBalance = (value) => {
        this.balance = value;
    }

    setTransactions = (array) => {
        this.transactions = array;
    }

    deductBalance = (value) => {
        this.balance = Number(this.getBalance()) - Number(value);
    }

    removeTransaction = (date) => {
        let t = this.getTransactions()
        for (var i = 0; i < t.length; i++){
            if (t[i].date === date){
                t.splice(i,1);
            }
        }
    };
    clearTransactions = () =>{
        this.transactions = [];
    }

}