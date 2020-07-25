import { Document } from "mongoose";

 export interface Produto extends Document{
    readonly nome: string;
    readonly descricao: string;
    readonly preco: number;
    readonly imageURL: string;
    readonly dataAt: Date ;
}