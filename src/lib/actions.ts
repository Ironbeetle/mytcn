'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function createFnMember(formData: FormData) {
  const first_name = formData.get('first_name') as string;
  const last_name = formData.get('last_name') as string;
  const birthdate = new Date(formData.get('birthdate') as string);
  const t_number = formData.get('t_number') as string;
  const gender = formData.get('gender') as string;
  const o_r_status = formData.get('o_r_status') as string;
  const community = formData.get('community') as string;
  const contact_number = formData.get('contact_number') as string;
  const option = formData.get('option') as string;
  const email = formData.get('email') as string;

  try {
    const member = await prisma.fnmember.create({
      data: {
        first_name,
        last_name,
        birthdate,
        t_number,
        gender,
        o_r_status,
        community,
        contact_number,
        option,
        email,
        created: new Date(),
        updated: new Date(),
      },
    });
    revalidatePath('/Editor');
    return { 
      success: true, 
      member: {
        ...member,
        created: member.created.toISOString(),
        updated: member.updated.toISOString(),
        birthdate: member.birthdate.toISOString(),
      }
    };
  } catch (error) {
    console.error('Error creating member:', error);
    return { success: false, error: 'Failed to create member' };
  }
}

export async function searchMembers(searchTerm: string) {
  try {
    if (!searchTerm) return [];
    
    const members = await prisma.fnmember.findMany({
      where: {
        OR: [
          { first_name: { contains: searchTerm, mode: 'insensitive' } },
          { last_name: { contains: searchTerm, mode: 'insensitive' } },
          { t_number: { contains: searchTerm, mode: 'insensitive' } },
          { contact_number: { contains: searchTerm, mode: 'insensitive' } },
          { email: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
      select: {
        id: true,
        created: true,
        updated: true,
        birthdate: true,
        first_name: true,
        last_name: true,
        t_number: true,
        gender: true,
        o_r_status: true,
        community: true,
        contact_number: true,
        option: true,
        email: true,
      }
    });
    
    // Serialize dates before returning
    return members.map(member => ({
      ...member,
      created: member.created.toISOString(),
      updated: member.updated.toISOString(),
      birthdate: member.birthdate.toISOString(),
    }));
  } catch (error) {
    console.error('Search error:', error);
    throw new Error('Failed to search members');
  }
}

export async function getItems(searchTerm: string = '') {
  try {
    // Define the where clause for search
    const where = searchTerm ? {
      OR: [
        { first_name: { contains: String(searchTerm), mode: 'insensitive' as const } },
        { last_name: { contains: String(searchTerm), mode: 'insensitive' as const } },
        { t_number: { contains: String(searchTerm), mode: 'insensitive' as const } },
        { email: { contains: String(searchTerm), mode: 'insensitive' as const } },
        { community: { contains: String(searchTerm), mode: 'insensitive' as const } },
      ]
    } : {};

    // Fetch all items
    const items = await prisma.fnmember.findMany({
      where,
      orderBy: {
        created: 'desc'
      },
    });

    // Transform dates to ISO strings
    const transformedItems = items.map(item => ({
      ...item,
      created: item.created.toISOString(),
      updated: item.updated.toISOString(),
      birthdate: item.birthdate.toISOString(),
    }));

    return {
      items: transformedItems,
      total: items.length
    };

  } catch (error) {
    console.error('Error fetching items:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch items: ${error.message}`);
    }
    throw new Error('Failed to fetch items');
  }
}

export async function deleteItem(id: string) {
  try {
    await prisma.fnmember.delete({
      where: { id }
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting item:', error);
    throw new Error('Failed to delete item');
  }
}

export async function createItem(data: {
  first_name: string;
  last_name: string;
  birthdate: Date;
  t_number: string;
  gender: string;
  o_r_status: string;
  community: string;
  contact_number: string;
  option: string;
  email?: string;
}) {
  try {
    const member = await prisma.fnmember.create({
      data: {
        ...data,
        created: new Date(),
        updated: new Date(),
      }
    });

    return {
      ...member,
      created: member.created.toISOString(),
      updated: member.updated.toISOString(),
      birthdate: member.birthdate.toISOString(),
    };
  } catch (error) {
    console.error('Error creating item:', error);
    throw new Error('Failed to create item');
  }
}

export async function updateItem(
  id: string,
  data: {
    first_name: string;
    last_name: string;
    birthdate: Date;
    t_number: string;
    gender: string;
    o_r_status: string;
    community: string;
    contact_number: string;
    option: string;
    email?: string;
  }
) {
  try {
    const member = await prisma.fnmember.update({
      where: { id },
      data: {
        ...data,
        updated: new Date(),
      }
    });

    return {
      ...member,
      created: member.created.toISOString(),
      updated: member.updated.toISOString(),
      birthdate: member.birthdate.toISOString(),
    };
  } catch (error) {
    console.error('Error updating item:', error);
    throw new Error('Failed to update item');
  }
}
