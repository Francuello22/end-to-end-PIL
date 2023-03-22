const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
    res.json( {nombre : "Franco"});
});

router.get("/users/:id", (req, res) => {
    const id = req.params.id;
    res.json({ 
                nombre: "Emanuel",
                id : id 
            })
});

router.post ("/users", (req, res) => {
    const user = req.body;
    res.json(user);
});

router.put("users/:id", (req, res) => {
    const id = req.params.id;
    const user = req.body;
    res.json({ Id: id, update: user})
});


router.delete("users/:id", (req, res) => {
    const id = req.params.id;
    res.json({Id : id});

});


module.exports = router;