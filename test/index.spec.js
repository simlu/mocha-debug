import { sum } from '../src/index';

const expect = require('chai').expect;

describe('Testing Index', () => {
    it('Testing sum', () => {
        expect(sum(7, 13)).to.equal(20);
    });
});
