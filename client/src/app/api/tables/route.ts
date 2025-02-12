import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Users", rls_enabled: true },
    { id: 2, name: "Orders", rls_enabled: false },
    { id: 3, name: "Transactions", rls_enabled: true },
  ]);
}
