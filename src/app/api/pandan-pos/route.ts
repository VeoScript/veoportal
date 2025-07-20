import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =
    process.env.NODE_ENV === "production" ? process.env.PROD_URL : process.env.DEV_URL;

  const res = await fetch(`${baseUrl}/files/pandan_app_version.json`);
  const json = await res.json();

  return NextResponse.json(json);
}
