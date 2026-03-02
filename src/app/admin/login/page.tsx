"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin/comments");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Invalid credentials");
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f4f7f6",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          width: "340px",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#2c3e50" }}>Admin Login</h2>

        <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 500 }}>
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.6rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />

        <label style={{ display: "block", marginBottom: "0.4rem", fontWeight: 500 }}>
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "0.6rem",
            marginBottom: "1.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />

        {error && (
          <p style={{ color: "#e74c3c", marginBottom: "1rem", fontSize: "0.9rem" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "#2c3e50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Logging in…" : "Log In"}
        </button>
      </form>
    </div>
  );
}
