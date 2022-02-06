import express from "express";
import addCryptoController from "../controllers/addCrypto.controller.js";
const router = express.Router();

router
    .get("/", addCryptoController.list)
    .post("/", addCryptoController.create)
    .put("/:id", addCryptoController.update)
    .delete('/:id', addCryptoController.deleted);

export default router;