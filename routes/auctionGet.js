const express = require('express');
const router = express.Router();
const auctions = require('../models/auctions');
const bodyParser = require('body-parser');

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({extended: true}));


router.get('/auction', (req,res) => {
    console.log(req.body);

    auctions.find({}, function (err, auction) {
       if (err) {
           throw err;
       } else {
        res.status(200).json({
            auction
        });
       }
    });

     
});

module.exports = router;