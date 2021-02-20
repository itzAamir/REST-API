// Importing
const express = require("express");
const router = express.Router();
const Model = require("../models/model")

// To get all the data
router.get("/", async (req, res) => {
    try {
        const cats = await Model.find();
        res.json(cats);
    } catch (err) {
        res.status(500).json({ "message": err.message });
    }
})

// To get one data
router.get("/:id", getCats, (req, res) => {
    res.json(res.cat);
})

// To Create a data
router.post("/", async (req, res) => {
    const cat = new Model({
        name: req.body.name
    })
    try {
        const newCat = await cat.save();
        res.status(201).json(newCat);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// To update data
router.patch("/:id", getCats, async (req, res) => {
    if (req.body.name != null) {
        res.cat.name = req.body.name;
    }
    try {
        const updatedCat = await res.cat.save();
        res.json(updatedCat)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// To delete data
router.delete("/:id", getCats, async (req, res) => {
    try {
        await res.cat.remove();
        res.json({ message: "Cat Removed Succesfully!" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

async function getCats(req, res, next) {
    let cat;
    try {
        cat = await Model.findById(req.params.id);
        if (cat == null) {
            return res.status(404).json({ message: "Cat Not Found" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.cat = cat;
    next();
}

module.exports = router;  
