import { NextResponse } from "next/server";

import { createSupabaseAdminClient, getWaitlistTableName } from "@/lib/supabase-admin";
import { validatePayload } from "@/lib/waitlist";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body. Please submit name and email." },
      { status: 400 },
    );
  }

  const record = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {};
  const payload = {
    name: typeof record.name === "string" ? record.name : "",
    email: typeof record.email === "string" ? record.email : "",
  };

  const validation = validatePayload(payload);
  if (!validation.ok) {
    return NextResponse.json({ message: validation.message }, { status: 400 });
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from(getWaitlistTableName()).insert(validation.data);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You are already on the waitlist. We will keep you posted." },
          { status: 200 },
        );
      }

      console.error("Supabase insert failed:", error);
      return NextResponse.json(
        { message: "Could not save your request right now. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "You are in. We will email you when early access opens." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Waitlist request failed:", error);
    return NextResponse.json(
      {
        message:
          "Supabase is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY.",
      },
      { status: 500 },
    );
  }
}
