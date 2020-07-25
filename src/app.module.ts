import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ProdutoModule,
     MongooseModule.forRoot('mongodb://localhost/produtos-db',{
      useNewUrlParser: true
     }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
