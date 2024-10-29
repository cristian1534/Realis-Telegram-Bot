import { Router } from "express";
import { sendMessageCtrl } from "../controllers/messageCtrl";

const router = Router();

router.post("/", sendMessageCtrl);

export default router;
