// hooks/use-bulletin.ts
import { useQuery } from '@tanstack/react-query';
import { msgApiLogSchema } from '@/lib/validation';
import { z } from 'zod';

// Type for the API response with User relation
type MsgApiLogWithUser = z.infer<typeof msgApiLogSchema> & {
  User: {
    first_name: string;
    last_name: string;
    department: string;
  };
};

export function useBulletinItems() {
  return useQuery({
    queryKey: ['bulletin-items'],
    queryFn: async (): Promise<MsgApiLogWithUser[]> => {
      const response = await fetch('/api/msgapi/bulletin');
      if (!response.ok) {
        throw new Error('Failed to fetch bulletin items');
      }
      const data = await response.json();
      return data;
    },
  });
}