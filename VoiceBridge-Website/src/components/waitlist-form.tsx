"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(payload.message ?? "You are on the list.");
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <form className="waitlist-card" onSubmit={onSubmit}>
      <p className="waitlist-kicker">Early access waitlist</p>
      <h3>Join before public launch</h3>
      <p>Drop your name and email. We will send invite waves, feature drops, and launch updates.</p>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your full name"
        autoComplete="name"
        required
        minLength={2}
        maxLength={80}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        autoComplete="email"
        required
        maxLength={160}
      />

      <button className="btn btn-accent" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Saving..." : "Join waitlist"}
      </button>

      {message && (
        <p className={status === "success" ? "form-message success" : "form-message error"}>{message}</p>
      )}
    </form>
  );
}
