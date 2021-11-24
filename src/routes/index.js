const router = require('express').Router();

router.get('/', (req, res) => {
    const data = {
        name: "Universidad Pontificia Bolivariana",
        website: "https://www.upb.edu.co/"
    };
    res.status(200).json(data);
});

module.exports = router;