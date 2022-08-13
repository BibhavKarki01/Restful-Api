const express = require("express");

const router = new express.Router();

const MensRanking = require("../models/mens");


///we will handle post req

router.post("/mens", async(req,res) =>{
    try{
        const addingMensRecords = new MensRanking(req.body)
      console.log(req.body);
        const insertMensData = await addingMensRecords.save();
        res.status(201).send(insertMensData);

    }catch(e){
        res.status(400).send(e);
    }
}) 

// we will handle get method 

router.get("/mens", async(req, res) =>{
    try{
      const getMens = await MensRanking.find({}).sort({"ranking":1});
      res.send(getMens);
    }catch(e){
        res.status(401).send(e);
    }
})

// we will handle get req of individual

router.get("/mens/:id",async(req, res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        res.send(getMen);

    }catch(e){
        res.status(401).send(e);
    }
})

// we will handle patch req of individual

router.patch("/mens/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const updateMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new :true
        });
        res.send(updateMen);

    }catch(e){
        res.status(500).send(e);
    }
})

// // we will handle delete req of individual
router.delete("/mens/:id", async(req,res)=> {
    try{
       const _id = req.params.id;
       const deleteMen = await MensRanking.findByIdAndDelete(_id);
       res.send(deleteMen);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;