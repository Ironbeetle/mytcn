// app/api/msgapi/bulletin/route.ts
import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma'; // Adjust this import path to match your setup

export async function GET() {
  try {
    // Use your actual database client (prisma, drizzle, etc.)
    const bulletinData = await prisma.msgApiLog.findMany({
      where: {
        isPublished: true,
      },
      include: {
        User: {
          select: {
            first_name: true,
            last_name: true,
            department: true,
          },
        },
      },
      orderBy: [
        { priority: 'desc' },
        { created: 'desc' },
      ],
    });
    
    return NextResponse.json(bulletinData);
  } catch (error) {
    console.error('Error fetching bulletin items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bulletin items' },
      { status: 500 }
    );
  }
}