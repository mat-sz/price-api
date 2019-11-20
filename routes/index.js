const { Router } = require('express');
const router = Router();

router.get('/', function(req, res) {
    res.write('api');
    res.end();
});


module.exports = router;