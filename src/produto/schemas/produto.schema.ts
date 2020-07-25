import { Schema } from 'mongoose';


export const ProdutoSchema = new Schema({
    nome: { type: String, required: true},
    descricao: String,
    preco: Number,
    imageURL: String,
    dataAt: {
        type: Date,
        default: Date.now
    }
})