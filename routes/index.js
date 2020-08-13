var express = require('express');
var router = express.Router();
const handler = require('../handler')

/* GET home page. */
router.get('/api', function(req, res, next) {
    handler.requestHandler(req, res)
});

module.exports = router;
