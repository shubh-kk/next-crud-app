import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma  = new PrismaClient()

export async function GET() {

    const user = await prisma.user.findFirst({});
    return Response.json({
        msg: "user detailes are found",
        name: user?.username,
        email: user?.username
    })
}

interface ReqBody {
    username: string,
    password: string
}

export async function POST(req: NextRequest) {

    try {
        const data = await req.json() as ReqBody;
        console.log(data);

        const user = await prisma.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        })
        console.log(user.id);

        return NextResponse.json({
            user,
            msg: "Signup Success!!"
        })
    } catch (error) {
        return NextResponse.json({
            msg: "Please Provide the Username and Password in Body!!",
            error
        })
    }

}