import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const res = await request.json();
    const { title, content } = res;

    console.log('Received data:', { title, content }); // Log received data

    const result = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          create: {
            name: 'Amir',
            id:'3'
          },
        },
      },
    });

    console.log('Post created successfully:', result); // Log success

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error creating post:", error); // Log detailed error
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
