import { assert } from 'chai';

import TshirtRule from '../../src/rules/tshirt'
import VoucherRule from '../../src/rules/voucher'
import Checkout from '../../src/service/checkout'
import {VOUCHER, TSHIRT, MUG} from '../../src/constants/items'

const scenarios = [{
    codes: [VOUCHER, TSHIRT, MUG],
    total: 32.5
}, {
    codes: [VOUCHER, TSHIRT, VOUCHER],
    total: 25
}, {
    codes: [TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT],
    total: 81
}, {
    codes: [VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT],
    total: 74.5
}];

describe('service / checkout', () => {
    let co;
    beforeEach(function() {});
    describe('scan', () => {
        it('should add items to the cart', () => {
            scenarios.forEach(scenario => {
                co = new Checkout([new TshirtRule(), new VoucherRule()]);
                scenario.codes.forEach(code => co.scan(code));
                assert.equal(co.cart.items.length, scenario.codes.length);
            });
        });
    });
    describe('total', () => {
        it('should calculate the price of all items including discounts', () => {
            scenarios.forEach(scenario => {
                co = new Checkout([new TshirtRule(), new VoucherRule()]);
                scenario.codes.forEach(code => co.scan(code));
                assert.equal(co.total(), scenario.total);
            });
        });
    });
});