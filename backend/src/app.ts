
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes";
import quotationRoutes from "./routes/quotation.routes";
import inspectionRoutes from "./routes/inspection.routes";
import { requireAuth } from "./middlewares/requireAuth";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "Backend is healthy" });
});

// Protected test route
app.get("/api/protected", requireAuth, (req, res) => {
  res.json({
    message: "You have access",
    user: req.user, // ✅ typed, safe
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/inspection-requests", inspectionRoutes);

export default app;