import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.NEON_DATABASE_URL}`);

const posts = await sql("SELECT * FROM posts");

export async function POST(req: Request) {
  return new Response(JSON.stringify(posts));
}
