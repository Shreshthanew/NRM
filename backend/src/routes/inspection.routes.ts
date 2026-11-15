import { Router } from "express";
import { submitInspectionRequest } from "../controllers/inspection.controller";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/", requireAuth, submitInspectionRequest);

export default router;
