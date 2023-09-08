export interface IAppointment {
    id: number;
    idDentista: number;
    nomeDentista: string;
    idPaciente: number;
    nomePaciente: string;
    idProcedimento: number;
    nomeProcedimento: string;
    data: string;
  }
  
  export interface INewAppointment {
    idDentista: number;
    idPaciente: number;
    idProcedimento: number;
    data: string;
    especialidade: IEspecialidade;
  }
  
  export interface ICancelAppointment {
    idConsulta: number;
    motivo: IMotivoCancelamento;
  }
  
  export enum IEspecialidade {
    CLINICO_GERAL = 'Clínico geral',
    IMPLANTODENTISTA = 'Implantodentista',
    ORTODONTISTA = 'Ortodontista',
    ODONTOPEDIATRIA = 'Odontopediatria',
  }
  
  export enum IMotivoCancelamento {
    PACIENTE_DESISTIU = 'Paciente desistiu',
    DENTISTA_CANCELOU = 'Dentista cancelou',
    OUTROS = 'Outros',
  }
  