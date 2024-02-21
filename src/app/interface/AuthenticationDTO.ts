
import { z } from 'zod';

export const AuthenticationDTO = z.object({
  login: z.string().min(4),
  password: z.string().min(6),
});

export interface Auth {
  login: string;
  password: string;
}