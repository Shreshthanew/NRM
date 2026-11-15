import { Router } from "express";
import { submitQuotation } from "../controllers/quotation.controller";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/", requireAuth, submitQuotation);

export default router;
