import Cart from '../models/cart';
import {newItemByCode} from '../models/item';
import * as helper from '../helpers/instances';

function Checkout(rules) {
    helper.throwErrorIfNotArray(rules);
    this.rules = rules;
    this.cart = new Cart();
}

Checkout.prototype.scan = function (code) {
    let item = newItemByCode(code);
    this.cart.add(item);
    this.rules.forEach(rule => {
        helper.throwErrorIfNotRule(rule);
        if (rule.isApplicable(this.cart, item)) {
            rule.applyRule(this.cart);
        }
    });
    
    return this;
};

Checkout.prototype.total = function () {
    return this.cart.total();
};

export default Checkout;
