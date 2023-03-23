const express = require('express');
const { users } = require('../services/user.service');
const router = express.Router();
const service = require ('../services/user.service')



router.get("/users", async (req, res) => {
    try {
        const users = await service.getUsers();
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    });

router.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await service.getById(id);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    });


router.post ("/users", async (req, res) => {
    try {
        const userData = req.body;
        const user = await service.store(userData);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
});


router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const toUpdate = req.body;
        const user = await service.update(id, toUpdate);
        return res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    });


router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const users = await service.delete(id);
        return res.json(users);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    });


module.exports = router;