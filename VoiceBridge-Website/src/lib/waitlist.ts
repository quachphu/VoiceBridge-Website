export type WaitlistPayload = {
  name: string;
  email: string;
};

type ValidationResult =
  | { ok: true; data: WaitlistPayload }
  | { ok: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizePayload(payload: WaitlistPayload): WaitlistPayload {
  return {
    name: payload.name.trim().replace(/\s+/g, " "),
    email: payload.email.trim().toLowerCase(),
  };
}

export function validatePayload(payload: WaitlistPayload): ValidationResult {
  const normalized = normalizePayload(payload);

  if (normalized.name.length < 2) {
    return { ok: false, message: "Please enter your full name." };
  }

  if (normalized.name.length > 80) {
    return { ok: false, message: "Please keep your name under 80 characters." };
  }

  if (!emailPattern.test(normalized.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (normalized.email.length > 160) {
    return { ok: false, message: "Please use a shorter email address." };
  }

  return { ok: true, data: normalized };
}
