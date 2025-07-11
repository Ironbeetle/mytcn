// app/api/bulletin/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const bulletinItems = await prisma.msgApiLog.findMany({
      where: {
        isPublished: true,
      },
      orderBy: [
        { priority: 'desc' }, // High priority first
        { created: 'desc' }
      ],
      include: {
        User: {
          select: {
            first_name: true,
            last_name: true,
            department: true,
          }
        }
      }
    });

    return NextResponse.json(bulletinItems);
  } catch (error) {
    console.error('Error fetching bulletin items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bulletin items' },
      { status: 500 }
    );
  }
}