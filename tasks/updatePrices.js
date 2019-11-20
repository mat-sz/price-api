const cex = require('../external/cex');
const store = require('../stores/price');

async function updatePrices() {
    try {
        for (let symbol of store.supportedUSDPairs) {
            const price = await cex.lastPrice(symbol, 'USD');
            store.current[symbol] = price;
        }
    } catch (e) {
        // Fail gracefully.
    }
}

module.exports = updatePrices;