import { Controller, Post, Get, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProdutoDTO } from './dto/produto.dto';
import { ProdutoService } from './produto.service';



@Controller('produto')
export class ProdutoController {

    constructor(private servioProduto : ProdutoService){}

    @Post('/create')
   async createPost(@Res() res, @Body() createProdutoDTO: CreateProdutoDTO){
        const produto = await this.servioProduto.createProdutos(createProdutoDTO);
        
       return res.status(HttpStatus.OK).json({
            message: 'sucesso',
            produto: produto
       });
    }

}
