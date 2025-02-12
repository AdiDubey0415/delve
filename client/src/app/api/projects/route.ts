import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Project A", pitr_enabled: true },
    { id: 2, name: "Project B", pitr_enabled: false },
    { id: 3, name: "Project C", pitr_enabled: true },
    { id: 4, name: "Project D", pitr_enabled: false },
    { id: 5, name: "Project E", pitr_enabled: false },
    { id: 6, name: "Project F", pitr_enabled: true },
    { id: 7, name: "Project G", pitr_enabled: false },
    { id: 8, name: "Project H", pitr_enabled: true },
    { id: 9, name: "Project I", pitr_enabled: false },
  ]);
}
