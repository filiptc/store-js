import { assert } from 'chai';

import Rule from '../../src/rules/rule'
import {NOT_IMPLEMENTED} from '../../src/constants/errors'

describe('rules / rule', () => {
    let rule;
    beforeEach(function() {
        rule = new Rule();
    });
    it('methods should throw errors when unimplemented', () => {
        assert.throw(rule.isApplicable.bind(rule), NOT_IMPLEMENTED.message);
        assert.throw(rule.applyRule.bind(rule), NOT_IMPLEMENTED.message);
    });
});