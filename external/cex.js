const endpoint = 'https://cex.io/api/';
const fetch = require('node-fetch');

/**
 * Fetches OHLC data, discards 1h and 1m resolution since these aren't very useful for our purposes.
 * @param {String} symbol1 First symbol of the pair.
 * @param {String} symbol2 Second symbol of the pair, usually USD.
 * @param {String} date YYYYMMDD formatted date.
 */
async function historicalData(symbol1, symbol2, date) {
    const res = await fetch(endpoint + 'ohlcv/hd/' + date + '/' + symbol1 + '/' + symbol2);
    const json = await res.json();
    const data1d = JSON.parse(json.data1d);
    return data1d.map((row) => ({ unix: row[0], open: row[1], high: row[2], low: row[3], close: row[4] }));
}

/**
 * Fetches the last price.
 * @param {String} symbol1 First symbol of the pair.
 * @param {String} symbol2 Second symbol of the pair, usually USD.
 */
async function lastPrice(symbol1, symbol2) {
    const res = await fetch(endpoint + 'last_price/' + symbol1 + '/' + symbol2);
    const json = await res.json();
    return +json.lprice;
}

module.exports = {
    historicalData,
    lastPrice,
};