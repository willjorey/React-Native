export default class Transaction{
    constructor(price, tax, tip,){
        this.price = price;
        this.tax = tax;
        this.tip = tip;
    }
    getPrice = () =>{
        return this.price;
    };
    getTax = () =>{
        return this.tax;
    };
    getTip = () =>{
        return this.tip;
    }
}