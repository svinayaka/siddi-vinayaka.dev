"use server";
import { sql } from "./db";

export async function getData() {
  const data = await sql`SELECT * FROM your_table_name LIMIT 10;`;
  return data;
}