import { NextResponse } from "next/server";

import data from "./foods.json";

export async function GET() {
  return NextResponse.json({ data });
}
