export interface IRegistrationFormInputValues {
  cro?: string;
  cpf?: string;
  especialidade?: string;
  nome: string;
  email: string;
  telefone: string;
  logradouro: string;
  numero?: string;
  uf: string;
  complemento?: string;
  cidade: string;
  cep: string;
  bairro: string;
  idDentista?: number;
  idPaciente?: number;
  idProcedimento?: number;
  data?: string;
}

export interface IRegistrationFormOption {
  type: 'doctor' | 'patient' | 'appointment';
  inputValues?: IRegistrationFormInputValues;
}

export const UFs: string[] = [
  'MG',
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
].sort((a, b) => (b > a ? -1 : 1));
