import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const items = await prisma.item.findMany({ orderBy: { votes: 'desc' } });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  let { name } = await request.json();
  name = name.trim().replace(/\s+/g, " ");
  const existing = await prisma.item.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });

  if (existing) {
    return NextResponse.json(
      { error: "Esse nome já foi sugerido!" },
      { status: 400 }
    );
  }

  const item = await prisma.item.create({
    data: { name, votes: 0 },
  });

  return NextResponse.json(item, { status: 201 });
}
