import type { IAddress } from "./address.interface"
import type { IStatus } from "./status.interface"

export interface IUser {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: IAddress;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: IStatus;
}
