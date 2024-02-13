// validationSchemas.js
import { z } from "zod";

export const userRegistrationSchema = z.object({
  nome: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  sobreNome: z.string().min(2, "Sobrenome deve ter no mínimo 2 caracteres"),
  cidade: z.string(),
  bairro: z.string(),
  endereco: z.string(),
  telefone: z.string(),
  email: z.string().min(6, "Login deve ter no mínimo 6 caracteres"),
});
