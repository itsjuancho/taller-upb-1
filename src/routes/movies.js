const router = require('express').Router();
const dataset = require('../samples.json');

router.get('/', (req, res) => {
    const data = {
        status: true,
        data: dataset 
    };
    res.status(200).json(data);
});

module.exports = router;