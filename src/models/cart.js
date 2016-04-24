import * as helper from '../helpers/instances'

function Cart() {
    this.items = [];
    
    this.add = function(item) {
        helper.throwErrorIfNotItem(item);
        this.items.push(item)
    };

    this.total = function() {
        return this.items.reduce((total, item) => {
            helper.throwErrorIfNotItem(item);
            return total + item.price || 0;
        }, 0);
    };

    this.countByCode = function (code) {
        return this.items.filter(item => {
            helper.throwErrorIfNotItem(item);
            return code === item.code;
        }).length
    };
}
export default Cart;