"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/lib/auth";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signup({ name, email, password });
      router.push("/login");
    } catch (err: any) {
      setError(err?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <section className="min-h-screen bg-brand-surface flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-brand-border rounded-2xl p-10 shadow-sm">

        <h1 className="text-2xl font-bold text-brand-primary mb-2">
          Create Account
        </h1>
        <p className="text-brand-muted mb-8">
          Register to request inspections and manage reports.
        </p>

        {error && (
          <div className="mb-4 text-red-600 font-semibold">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-brand-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-brand-primary text-white font-semibold hover:bg-brand-secondary transition"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-sm text-brand-muted text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-brand-primary font-semibold hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
}