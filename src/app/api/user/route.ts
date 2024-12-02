import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password, name } = await req.json();
  const isExistUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (isExistUser) {
    return NextResponse.json(
      { Message: "User Already Exist " },
      { status: 404 }
    );
  }
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      name: name,
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        Message: "Something is wrong while Creating User",
      },
      {
        status: 300,
      }
    );
  }
  return NextResponse.json(
    { Message: "User Created SuccessFully" },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json({ message: "Welocmde" });
}
