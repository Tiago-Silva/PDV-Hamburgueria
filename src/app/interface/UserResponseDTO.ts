import { string } from "zod";

export interface UserResponseDTO {
  id: string;
  nome: string;
  sobreNome: string;
  login: string;
  password: string;
  telefone: string;
  endereco: string;
  cpf: string;
  email: string;
  type: string;
  role: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  idestabelecimento: number;
}