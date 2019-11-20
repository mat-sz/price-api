const { Router } = require('express');
const router = Router();

const store = require('../stores/price');

router.get('/:symbol', function(req, res, next) {
    const uppercaseSymbol = req.params.symbol.toUpperCase();
    if (store.current.hasOwnProperty(uppercaseSymbol)) {
        res.json({
            'price': store.current[uppercaseSymbol],
            'history': store.history[uppercaseSymbol],
        });
    } else {
        next();
    }
});


module.exports = router;