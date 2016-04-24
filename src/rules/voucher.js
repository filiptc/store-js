import Rule from './rule';
import {VOUCHERS_NECESSARY_FOR_DISCOUNT} from '../constants/rules'
import * as helper from '../helpers/instances';
import {VOUCHER} from '../constants/items';

function VoucherRule() {
    this.isApplicable = (cart, item) => {
        helper.throwErrorIfNotCart(cart);
        helper.throwErrorIfNotItem(item);
        if (item.code !== VOUCHER) {
            return false;
        }

        let vouchersInCart = cart.countByCode(VOUCHER);
        let freeDiscountsApplied = countFreeVouchers(cart) * VOUCHERS_NECESSARY_FOR_DISCOUNT;
        let dicountPendingvouchers = vouchersInCart - freeDiscountsApplied;

        return dicountPendingvouchers >= VOUCHERS_NECESSARY_FOR_DISCOUNT
    };

    this.applyRule = cart => {
        helper.throwErrorIfNotCart(cart);
        cart.items.some((item, i) => {
            if (item.code === VOUCHER && item.price !== 0) {
                cart.items[i].price = 0;
                return true;
            }
        });
        return cart;
    };
}

export const countFreeVouchers = cart => {
    return cart.items.filter(item => item.code === VOUCHER && item.price == 0).length
};

VoucherRule.prototype = new Rule;

export default VoucherRule;