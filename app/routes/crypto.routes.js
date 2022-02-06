import express from "express";
import cryptoController from "../controllers/crypto.controller.js";
const router = express.Router();

router
    .get("/", cryptoController.list)
    .post("/", cryptoController.create)
    .put("/:id", cryptoController.update)
    .delete('/:id', cryptoController.deleted);

export default router;