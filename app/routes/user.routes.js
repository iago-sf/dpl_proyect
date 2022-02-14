import express from "express";
import userController from "../controllers/user.controller.js";
const router = express.Router();

router
    .get("/all", userController.all)
    .post("/login", userController.list)
    .post("/manage", userController.create)
    .put("/manage/:id", userController.update)
    .delete('/manage/:id', userController.deleted);
    

export default router;
