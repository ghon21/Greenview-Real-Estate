import { Pool } from "pg";
import { Listing, sampleListings } from "./data";
const g = globalThis as unknown as { pool?: Pool };
export const pool = g.pool ?? new Pool({ connectionString: process.env.DATABASE_URL });
if (process.env.NODE_ENV !== "production") g.pool = pool;

export async function getListings(): Promise<Listing[]> {
  try {
    if (!process.env.DATABASE_URL) throw new Error("no database");
    const r = await pool.query(
      "select id::text, address, suburb, price_guide as price, beds, baths, cars, status from listings where status in ('for_sale','sold') order by created_at desc limit 6"
    );
    if (r.rows.length) return r.rows as Listing[];
  } catch {}
  return sampleListings;
}
