import Item from '../models/item'
import Cart from '../models/cart'
import * as ERROR from '../constants/errors';

function Rule() {
    this.isApplicable = function(cart, item) {
        throw ERROR.NOT_IMPLEMENTED;
    };
    
    this.applyRule = function(cart) {
        throw ERROR.NOT_IMPLEMENTED;
    };
}

export default Rule