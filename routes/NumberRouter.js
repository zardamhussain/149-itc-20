const express = require('express');
const router = express.Router();
const NumberLogic = require('../logic/numberLogic')

router.get("/",(req,res)=>{
    let ans = { numbers : [] };
    let flag = false;

    try {
        const features = new NumberLogic(req.query).filter();
        features.then(x => res.status(200).json( { numbers: x}) );

    }catch(e) {
        setTimeout(() => res.status.send("timeout"), 500);
        res.status(200).json(ans);
    }

})
module.exports = router;
