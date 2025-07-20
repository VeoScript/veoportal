import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "files", "pandan_app_version.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const jsonData = JSON.parse(fileContents);

  return NextResponse.json(jsonData);
}
