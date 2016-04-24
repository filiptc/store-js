import * as ITEM from '../constants/items'
import * as ERROR from '../constants/errors'

function Item(code, name, price) {
    this.code = code || '';
    this.name = name || '';
    this.price = price || 0.0;
}

function Voucher() {
    Item.call(this, ITEM.VOUCHER, ITEM.VOUCHER_NAME, ITEM.VOUCHER_PRICE)
}
Voucher.prototype = Object.create(Item.prototype);
Voucher.prototype.constructor = Voucher;

function Tshirt() {
    Item.call(this, ITEM.TSHIRT, ITEM.TSHIRT_NAME, ITEM.TSHIRT_PRICE)
}
Tshirt.prototype = Object.create(Item.prototype);
Tshirt.prototype.constructor = Tshirt;

function Mug() {
    Item.call(this, ITEM.MUG, ITEM.MUG_NAME, ITEM.MUG_PRICE)
}
Mug.prototype = Object.create(Item.prototype);
Mug.prototype.constructor = Mug;

export function newItemByCode(code) {
    switch (code) {
        case ITEM.VOUCHER:
            return new Voucher();
        case ITEM.TSHIRT:
            return new Tshirt();
        case ITEM.MUG:
            return new Mug();
        default:
            throw ERROR.UNKNOWN_PRODUCTCODE
    }
}

export default Item;
export {Voucher, Tshirt, Mug, newItemByCode};