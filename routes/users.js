import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("user")
})

router.get("/:userId", (req, res) => {
    res.send(`${req.params.userId}`)
})

router.get("/:userId/registrations/", (req, res) => {
    res.send(`${req.params.userId} + registration`)
})

router.get("/:userId/registrations/:registrationId", (req, res) => {
    res.send(`${req.params.userId} + registration + ${req.params.registrationId}`)
})

export default router;