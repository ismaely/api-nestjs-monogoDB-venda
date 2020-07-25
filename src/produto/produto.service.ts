import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Produto } from './interfaces/produto.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProdutoDTO } from './dto/produto.dto';




@Injectable()
export class ProdutoService {

 constructor(@InjectModel('Produto') private readonly produtoModelo: Model<Produto>){}

 async getProdutos(): Promise <Produto[]>{
     const listaProduto = await this.produtoModelo.find();
     return listaProduto;
 }

 async getProduto(produtoID: string): Promise<Produto>{
     const produto = await this.produtoModelo.findById(produtoID);
     return produto;

 }

 async createProdutos(novoProduto: CreateProdutoDTO): Promise<Produto>{
    const produto = new this.produtoModelo(novoProduto);
    return await produto.save();
 }

 async deleteProduto(produtoID: string): Promise<Produto>{
     const deletProduto = await this.produtoModelo.findByIdAndDelete(produtoID);
     return deletProduto;
 }


async updateProduto(produtoID: string, novoProduto: CreateProdutoDTO): Promise<Produto>{
     const  updatProduto = await this.produtoModelo.findByIdAndUpdate(produtoID,
        novoProduto, {new: true});
        return updatProduto;
 }


}
