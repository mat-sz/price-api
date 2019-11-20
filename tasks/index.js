const updateHistory = require('./updateHistory');
const updatePrices = require('./updatePrices');

// JS crontab, basically.
module.exports = [
    {
        cronTime: '1 0 * * *',
        function: updateHistory,
        autorun: true,
    },
    {
        cronTime: '*/10 * * * *',
        function: updatePrices,
        autorun: true,
    }
];