import Rule from './rule';
import {TSHIRTS_NECESSARY_FOR_DISCOUNT, REDUCED_TSHIRT_PRICE} from '../constants/rules'
import * as helper from '../helpers/instances';
import {TSHIRT} from '../constants/items';

function TshirtRule () {
    this.isApplicable = (cart, item) => {
        helper.throwErrorIfNotCart(cart);
        helper.throwErrorIfNotItem(item);
        return item.code === TSHIRT && hasEnoughTshirtsForDiscount(cart)
    };
    this.applyRule = cart => {
        helper.throwErrorIfNotCart(cart);
        cart.items = cart.items.map(item => {
            if (item.code === TSHIRT) {
                item.price = REDUCED_TSHIRT_PRICE
            }
            return item;
        });
        return cart;
    };
}

export const hasEnoughTshirtsForDiscount = (cart) =>
    cart.countByCode(TSHIRT) >= TSHIRTS_NECESSARY_FOR_DISCOUNT;

TshirtRule.prototype = new Rule;

export default TshirtRule;