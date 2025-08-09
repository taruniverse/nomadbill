import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller";

const router = Router();

router.post("/create", registerUser);
router.post("/login", loginUser);

export default router;
