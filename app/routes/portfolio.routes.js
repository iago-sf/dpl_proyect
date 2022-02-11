import express from "express";
import portfolioController from "../controllers/portfolio.controller.js";
const router = express.Router();

router
    .get("/get/:id", portfolioController.getPortfoliosByUserEmail)
    .post("/", portfolioController.create)
    .put("/:id", portfolioController.update)
    .delete('/:id', portfolioController.deleted);

export default router;