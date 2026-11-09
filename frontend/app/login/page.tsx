// "use client";

// import { useState } from "react";
// import { login } from "@/lib/auth";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { refreshUser } = useAuth();
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError("");

//     try {
//       await login({ email, password });
// await refreshUser();   
// router.push("/");
//     } catch (err: any) {
//       setError(err.message);
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-brand-surface">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
//       >
//         <h1 className="text-2xl font-bold text-brand-primary mb-6">
//           Login
//         </h1>

//         {error && <p className="text-red-600 mb-4">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-3 border rounded-md"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 p-3 border rounded-md"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="w-full py-3 bg-brand-primary text-white rounded-md">
//           Login
//         </button>

//         <p className="mt-6 text-center text-sm text-brand-muted">
//           Don’t have an account?{" "}
//           <Link
//             href="/signup"
//             className="text-brand-primary font-semibold hover:underline"
//           >
//             Sign up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { refreshUser } = useAuth();   // ← IMPORTANT

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password });
      await refreshUser();             // ← MUST exist
      router.replace("/");
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-surface">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-brand-primary mb-6">
          Login
        </h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full py-3 bg-brand-primary text-white rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}