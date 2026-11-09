export async function signup(data: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // IMPORTANT
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
}

export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // COOKIE MAGIC
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }

  return res.json();
}

export async function logout() {
  await fetch(`/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function getCurrentUser() {
  const res = await fetch(`/api/auth/me`, {
    credentials: "include",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}