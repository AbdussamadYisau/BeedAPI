const express = require('express');
const router = express.Router();
const auctions = require('../models/auctions');
const bodyParser = require('body-parser');

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({extended: true}));


router.post('/auction', (req,res) => {
    console.log(req.body);

    const auction = new auctions({
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        picture: req.body.picture
    });

    auction.save(function (err) {
        if (err) {
            throw err;

        } else {
                res.status(200).json({
                    result: "Uploaded successfully"
                });
        }
    });

     
});

module.exports = router;