const t = require('tap');
const {Card} = require('../lib/cards');

// test getValue
const sv = [
    ['3H', 3],
];

for (const [s,v] of sv) {
    try {
        console.log(s,v);
        const n = Card.getValue(s);
        t.equal(n, v, `For ${s}`);
    } catch (e) {
        t.error(e, `While parsing ${s}`);
    }
}