import { assert } from 'chai';

import Rule from '../../src/rules/rule'
import TshirtRule, { hasEnoughTshirtsForDiscount } from '../../src/rules/tshirt'
import {Voucher, Tshirt} from '../../src/models/item'
import Cart from '../../src/models/cart'
import {REDUCED_TSHIRT_PRICE} from '../../src/constants/rules'
import {VOUCHER_PRICE} from '../../src/constants/items'

describe('rules / tshirt', () => {
    let cart, tshirtRule;
    beforeEach(function() {
        cart = new Cart();
        tshirtRule = new TshirtRule();
    });

    describe('TshirtRule', () => {
        it('is intance of Rule', () => {
            assert.instanceOf(tshirtRule, Rule);
        });
    });

    describe('isApplicable', () => {
        it('should return true when applicable', () => {
            cart.add(new Voucher());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            assert.isTrue(tshirtRule.isApplicable(cart, new Tshirt()));
        });
        it('should return false when item passed is not tshirt', () => {
            cart.add(new Voucher());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            assert.isFalse(tshirtRule.isApplicable(cart, new Voucher()));
        });
        it('should return false when cart does not meet requirements', () => {
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Tshirt());
            assert.isFalse(tshirtRule.isApplicable(cart, new Tshirt()));
        });
    });

    describe('applyRule', () => {
        it('should modify cart to apply discount', () => {
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            cart.add(new Voucher());
            assert.equal(tshirtRule.applyRule(cart).items[0].price, REDUCED_TSHIRT_PRICE);
            assert.equal(tshirtRule.applyRule(cart).items[1].price, REDUCED_TSHIRT_PRICE);
            assert.equal(tshirtRule.applyRule(cart).items[2].price, VOUCHER_PRICE);
        });
    });

    describe('hasEnoughTshirtsForDiscount', () => {
        it('should return true when cart meets requirements', () => {
            cart.add(new Voucher());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            cart.add(new Tshirt());
            assert.isTrue(hasEnoughTshirtsForDiscount(cart));
        });
        it('should return false when cart does not meet requirements', () => {
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Tshirt());
            assert.isFalse(hasEnoughTshirtsForDiscount(cart));
        });
    });

});