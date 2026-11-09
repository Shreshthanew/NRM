
import { Request, Response } from "express";
import { signupUser } from "../services/auth.service";
import { loginUser, getUserById } from "../services/auth.service";
import { signToken } from "../utils/jwt";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await loginUser(email, password);

    const token = signToken({
      id: user.id,
      email: user.email,
    });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
}

export function logout(_req: Request, res: Response) {
  res.clearCookie("auth_token");
  res.json({ message: "Logged out successfully" });
}

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await signupUser({ name, email, password });

    res.status(201).json({
      message: "Signup successful",
      user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
}

export async function me(req: Request, res: Response) {
  const user = await getUserById(req.user!.id);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  return res.json(user);
}
