const cex = require('../external/cex');
const store = require('../stores/price');

async function updateHistory() {
    try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const year = yesterday.getUTCFullYear().toString();
        const month = (yesterday.getUTCMonth() + 1).toString().padStart(2, "0");
        const day = yesterday.getUTCDate().toString().padStart(2, "0");
        const date = year + month + day;

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 8); // Actually 8 days ago. Making sure we get 7 data points. 
        weekAgo.setUTCHours(23);
        weekAgo.setUTCMinutes(0);

        const unixWeekAgo = weekAgo.getTime() / 1000;

        for (let symbol of store.supportedUSDPairs) {
            const historical = await cex.historicalData(symbol, 'USD', date);
    
            store.history[symbol] = historical.map((row) => {
                if (row.unix >= unixWeekAgo) {
                    return row.close;
                } else {
                    return null;
                }
            }).filter((row) => row !== null);
        }
    } catch (e) {
        // Fail gracefully.
    }
}

module.exports = updateHistory;