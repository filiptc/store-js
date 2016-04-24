import * as ERROR from '../constants/errors';
import Item from '../models/item';
import Cart from '../models/cart';
import Rule from '../rules/rule';

export function throwErrorIfNotCart(cart) {
    if (!(cart instanceof Cart)) {
        throw ERROR.WRONG_INSTANCE
    }
}

export function throwErrorIfNotItem(item) {
    if (!(item instanceof Item)) {
        throw ERROR.WRONG_INSTANCE
    }
}

export function throwErrorIfNotRule(rule) {
    if (!(rule instanceof Rule)) {
        throw ERROR.WRONG_INSTANCE
    }
}

export function throwErrorIfNotArray(array) {
    if (!(array instanceof Array)) {
        throw ERROR.WRONG_INSTANCE
    }
}