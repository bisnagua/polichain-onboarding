import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
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
