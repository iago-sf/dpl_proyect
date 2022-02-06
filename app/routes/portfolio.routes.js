import express from "express";
import portfolioController from "../controllers/portfolio.controller.js";
const router = express.Router();

router
    .get("/", portfolioController.list)
    .post("/", portfolioController.create)
    .put("/:id", portfolioController.update)
    .delete('/:id', portfolioController.deleted);

export default router;