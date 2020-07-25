import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { ProdutoSchema } from './schemas/produto.schema';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports:[
    MongooseModule.forFeature([
    { name: 'produto', schema: ProdutoSchema }
    ])
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService]
})
export class ProdutoModule {}
