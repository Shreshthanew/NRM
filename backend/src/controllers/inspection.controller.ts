import { Request, Response } from "express";
import {
  createInspectionRequest,
  RateLimitError,
  validateInspection,
  ValidationError,
} from "../services/inspection.service";

export async function submitInspectionRequest(req: Request, res: Response) {
  try {
    const input = validateInspection(req.body);
    const request = await createInspectionRequest(req.user!.id, input);

    return res.status(201).json({
      message: "Inspection request received",
      id: request.id,
      name: request.name,
      email: request.email,
      inspectionDate: input.inspectionDate,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, fields: error.fields });
    }
    if (error instanceof RateLimitError) {
      return res.status(429).json({ message: error.message });
    }
    console.error("[inspection] Failed to create request:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again in a moment." });
  }
}
