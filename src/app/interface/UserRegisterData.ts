

export interface UserRegisterData {
  nome: string;
  sobreNome?: string;
  telefone?: string;
  endereco?: string;
  email: string;
  type: string;
  idestabelecimento: number;
  googleAccessToken?: string;
}