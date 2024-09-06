import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    MongooseModule.forRoot( process.env.DB_URL || "mongodb://localhost:27017/alten" ),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
