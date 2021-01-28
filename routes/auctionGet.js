const express = require('express');
const router = express.Router();
const auctions = require('../models/auctions');
const bodyParser = require('body-parser');

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({extended: true}));


router.get('/auction', (req,res) => {

    auctions.find({}, function (err, auction) {
        if (err) {
            return res.json({
                auction: "No auctions right now!"
            });
        }else {
            return res.status(200).json({
                auction
            });
       }
    });

     
});

module.exports = router;