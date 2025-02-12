import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Alice", role: "Admin", mfa_enabled: true },
    { id: 2, name: "Bob", role: "Editor", mfa_enabled: false },
    { id: 3, name: "Charlie", role: "Viewer", mfa_enabled: true },
  ]);
}
