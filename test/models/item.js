import { assert } from 'chai';

import Item from '../../src/models/item'
import {Voucher, Mug, Tshirt} from '../../src/models/item'

describe('models / item', () => {
    describe('Voucher', () => {
        let voucher = new Voucher();
        it('is intance of Item', () => {
            assert.instanceOf(voucher, Item);
        });
    });
    describe('Tshirt', () => {
        let tshirt = new Tshirt();
        it('is intance of Item', () => {
            assert.instanceOf(tshirt, Item);
        });
    });
    describe('Mug', () => {
        let mug = new Mug();
        it('is intance of Item', () => {
            assert.instanceOf(mug, Item);
        });
    });
});