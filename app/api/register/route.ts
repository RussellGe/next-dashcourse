import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from '@/prisma/client'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return new Response(JSON.stringify(validation.error.errors), {
            status: 400,
        });
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if (user) {
        return new Response(JSON.stringify({ error: 'User already exists' }), {
            status: 400,
        });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const createdUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    })
    return NextResponse.json({ email: createdUser.email }, { status: 201 });
}