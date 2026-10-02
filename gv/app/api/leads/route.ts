import { NextResponse } from "next/server";
import { z } from "zod";
import { pool } from "@/lib/db";
export const runtime = "nodejs";

const schema = z.object({
  type: z.enum(["sell", "rent", "buy"]).default("sell"),
  address: z.string().min(5).max(200),
  name: z.string().min(2).max(100),
  phone: z.string().min(8).max(20),
  email: z.string().email().max(200),
  timeframe: z.string().max(40).optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // honeypot: bots fill this field
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Check your details and try again." }, { status: 422 });
  const d = parsed.data;
  try {
    await pool.query(
      "insert into leads (type,address,name,phone,email,timeframe) values ($1,$2,$3,$4,$5,$6)",
      [d.type, d.address, d.name, d.phone, d.email, d.timeframe ?? null]
    );
    if (process.env.LEAD_WEBHOOK_URL)
      fetch(process.env.LEAD_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) }).catch(() => {});
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We couldn't save your request. Please call 03 8650 3000." }, { status: 500 });
  }
}
