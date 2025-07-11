// actions/bulletin-actions.ts
"use server";

import  prisma  from "@/lib/prisma";
import { bulletinItemsSchema } from "@/lib//validation";

export async function getBulletinItems() {
  try {
    const bulletinItems = await prisma.msgApiLog.findMany({
      where: {
        isPublished: true,
      },
      orderBy: [
        { priority: "desc" }, // High priority first
        { created: "desc" },
      ],
      include: {
        User: {
          select: {
            first_name: true,
            last_name: true,
            department: true,
          },
        },
      },
    });

    // Validate the data with Zod
    const validatedData = bulletinItemsSchema.parse(bulletinItems);
    
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    console.error("Error fetching bulletin items:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch bulletin items",
    };
  }
}

export async function getBulletinItemsByPriority(priority: "high" | "medium" | "low") {
  try {
    const bulletinItems = await prisma.msgApiLog.findMany({
      where: {
        isPublished: true,
        priority: priority,
      },
      orderBy: {
        created: "desc",
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
    });

    const validatedData = bulletinItemsSchema.parse(bulletinItems);
    
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    console.error("Error fetching bulletin items by priority:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch bulletin items",
    };
  }
}

export async function getBulletinItemsByType(type: string) {
  try {
    const bulletinItems = await prisma.msgApiLog.findMany({
      where: {
        isPublished: true,
        type: type,
      },
      orderBy: [
        { priority: "desc" },
        { created: "desc" },
      ],
      include: {
        User: {
          select: {
            first_name: true,
            last_name: true,
            department: true,
          },
        },
      },
    });

    const validatedData = bulletinItemsSchema.parse(bulletinItems);
    
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    console.error("Error fetching bulletin items by type:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch bulletin items",
    };
  }
}