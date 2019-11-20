let priceStore = {
    current: {
        'USD': 1.0,
        'BTC': 0.0,
        'ETH': 0.0,
    },
    history: {
        'USD': [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
        'BTC': [],
        'ETH': [],
    },
    supportedUSDPairs: ['BTC', 'ETH'],
};

module.exports = priceStore;