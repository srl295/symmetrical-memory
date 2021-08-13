class Cards {
    constructor() {

    }
}

class Card {
    constructor(str) {
    }

    static getValue(str) {
        const q = /([A0-9]+)/.exec(str);
        if (q) {
            const v = q[1];
            if (v === 'A') {
                return 1; // ace
            }
            const n = Number(v);
            if (n >= 1 && n <= 10) {
                return n;
            }
            // throw Error(`Out of range: ${n} for ${str}`);
            // out of range
        }
        // throw Error(`Not parseable ${str}`);
        return null;
    }
}

module.exports = {
    Cards,
    Card
};
