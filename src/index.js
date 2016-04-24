import Checkout from './service/checkout'
import VoucherRule from './rules/voucher'
import TshirtRule from './rules/tshirt'

(() => {
    const pricingRules = [new VoucherRule(), new TshirtRule()];

    let co = new Checkout(pricingRules);
    co.scan("VOUCHER").scan("VOUCHER").scan("TSHIRT");
    let price = co.total();
    
    console.log(price)
})();