import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./product.model";
import { ProductDataGateway } from "./interface/product.interface";
import { ProductService } from "./product.service";
import { MongooseProduct } from "./services/mongoose-product.service";
import { ProductController } from "./product.controller";



@Module({
    imports: [
        MongooseModule.forFeature([{ name : "product" , schema: ProductSchema }])
    ],
    controllers: [ProductController],
    providers: [ProductService, {provide: ProductDataGateway, useClass: MongooseProduct}]
})
export class ProductModule{

}