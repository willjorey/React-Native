import Profile from '../Profile';
import Transaction from '../Transaction';
describe('renders correctly', () => {
    let p = new Profile(0);
    test('Set the Balance', () => {
        p.setBalance(20);
        expect(p.getBalance()).toEqual(20);
    });

    test('Add transactions', () => {
        let trans = new Transaction('20','2','22');
        p.addTransaction(trans);
        expect(p.getTransactions()[0]).toEqual(trans);

        let t1 = new Transaction('20','4','24');
        p.addTransaction(t1);
        expect(p.getTransactions()[1]).toEqual(t1);
    });
});