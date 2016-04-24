import { assert } from 'chai';

import Rule from '../../src/rules/rule'
import VoucherRule, { countFreeVouchers } from '../../src/rules/voucher'
import {Voucher, Tshirt} from '../../src/models/item'
import Cart from '../../src/models/cart'
import {} from '../../src/constants/items'

describe('rules / voucher', () => {
    let cart, voucherRule;
    beforeEach(function() {
        cart = new Cart();
        voucherRule = new VoucherRule();
    });

    describe('VoucherRule', () => {
        it('is intance of Rule', () => {
            assert.instanceOf(voucherRule, Rule);
        });
    });

    describe('isApplicable', () => {
        it('should return true when applicable', () => {
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Tshirt());
            assert.isTrue(voucherRule.isApplicable(cart, new Voucher()));
        });
        it('should return false when item passed is not voucher', () => {
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Tshirt());
            assert.isFalse(voucherRule.isApplicable(cart, new Tshirt()));
        });
        it('should return false when cart does not meet requirements', () => {
            cart.add(new Voucher());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            assert.isFalse(voucherRule.isApplicable(cart, new Voucher()));
        });
    });

    describe('applyRule', () => {
        it('should modify cart to apply discount', () => {
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            cart.add(new Voucher());
            cart.add(new Voucher());
            assert.equal(voucherRule.applyRule(cart).items[2].price, 0);
        });
    });

    describe('countFreeVouchers', () => {
        it('should return the number of free tshirts in cart', () => {
            cart.add(new Voucher());
            let freeVoucher = new Voucher();
            freeVoucher.price = 0;
            cart.add(freeVoucher);
            cart.add(freeVoucher);
            cart.add(new Tshirt());
            assert.equal(countFreeVouchers(cart), 2);
        });
        it('should return false when cart does not meet requirements', () => {
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Tshirt());
            assert.equal(countFreeVouchers(cart), 0);
        });
    });
});
