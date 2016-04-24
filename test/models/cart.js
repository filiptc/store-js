import { assert } from 'chai';

import Cart from '../../src/models/cart'
import {Voucher, Mug, Tshirt} from '../../src/models/item'
import {WRONG_INSTANCE} from '../../src/constants/errors'
import {VOUCHER, MUG} from '../../src/constants/items'

describe('models / cart', () => {
    let cart;
    beforeEach(function() {
        cart = new Cart();
    });


    describe('add', () => {
        it('should throw exception when item of wrong type', () => {
            assert.throws(cart.add.bind(cart), WRONG_INSTANCE.message);
        });
        it('should add item to cart.items', () => {
            cart.add(new Voucher());
            cart.add(new Mug());
            cart.add(new Tshirt());
            assert.lengthOf(cart.items, 3);
        });
    });
    describe('total', () => {
        it('should throw exception when item of wrong type', () => {
            cart.items = [{}];
            assert.throws(cart.total.bind(cart), WRONG_INSTANCE.message);
        });
        it('should amount to', () => {
            cart.add(new Voucher());
            cart.add(new Mug());
            cart.add(new Tshirt());
            assert.equal(cart.total(), 32.5);
        });
    });
    describe('countByCode', () => {
        it('should throw exception when item of wrong type', () => {
            cart.items = [{}];
            assert.throws(cart.countByCode.bind(cart), WRONG_INSTANCE.message);
        });
        it('should count items by codename', () => {
            cart.add(new Voucher());
            cart.add(new Voucher());
            cart.add(new Tshirt());
            assert.equal(cart.countByCode(VOUCHER), 2);
            assert.equal(cart.countByCode(MUG), 0);
        });
    });
});