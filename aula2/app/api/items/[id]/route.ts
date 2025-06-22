import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request: NextRequest) {
  const { pathname } = new URL(request.url);
  // O id estará no final da URL após /api/items/
  const idStr = pathname.split("/").pop();
  const id = Number(idStr);

  const body = await request.json();

  if (body.action === "upvote") {
    const updated = await prisma.item.update({
      where: { id },
      data: { votes: { increment: 1 } },
    });
    return NextResponse.json(updated);
  }

  if (body.action === "downvote") {
    const updated = await prisma.item.update({
      where: { id },
      data: { votes: { decrement: 1 } },
    });
    return NextResponse.json(updated);
  }

  return NextResponse.json({ error: "Ação inválida." }, { status: 400 });
}
