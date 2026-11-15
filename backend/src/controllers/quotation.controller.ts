import { Request, Response } from "express";
import {
  createQuotationRequest,
  RateLimitError,
  validateQuotation,
  ValidationError,
} from "../services/quotation.service";

export async function submitQuotation(req: Request, res: Response) {
  try {
    const input = validateQuotation(req.body);
    const request = await createQuotationRequest(req.user!.id, input);

    return res.status(201).json({
      message: "Quotation request received",
      id: request.id,
      name: request.name,
      email: request.email,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ message: error.message, fields: error.fields });
    }
    if (error instanceof RateLimitError) {
      return res.status(429).json({ message: error.message });
    }
    console.error("[quotation] Failed to create request:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again in a moment." });
  }
}
