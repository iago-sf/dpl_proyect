import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();

router
    .post("/list", userController.list)
    .post("/create", userController.create)
    .put("/update/:id", userController.update)
    .delete('/delete/:id', userController.deleted);

export default router;
