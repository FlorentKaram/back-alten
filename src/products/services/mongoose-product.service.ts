import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "../product.model";
import { ProductDataGateway } from "../interface/product.interface";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { FilterProductDto } from "../dto/filter-product.dto";


@Injectable()
export class MongooseProduct implements ProductDataGateway {
    constructor(@InjectModel('product') private readonly productModel: Model<Product>) { }

    getProductById = async (id: string) => {
        return this.productModel.findById({_id: id});
    };

    getProductImg = async (id: string) => {
        return this.productModel.findById({_id: id}).select('image');
    }

    getProducts = async (filter: FilterProductDto) => {
        let perPage = 10;
        if(filter.productPerPage != 0){
            perPage = filter.productPerPage;
        }
        return this.productModel
            .find({
                name: {
                    $regex: filter.name, $options: "i"
                }
            }
            )
            .limit(filter.productPerPage)
            .skip(filter.currentPage * perPage);
    };

    countProducts = async (name: string) => {
        return this.productModel.countDocuments({ name: {
            $regex: name, $options: "i"
        }});
    };

    createProduct = async (product: CreateProductDto) => {
        return this.productModel.create(product);
    };

    updateProduct = async (id: string, product: UpdateProductDto) => {
        product.updatedAt = new Date();        
        return this.productModel.findByIdAndUpdate({ _id: id }, product);
    };

    deleteProductById = async (id: string) => {
        return this.productModel.findByIdAndDelete({ _id: id });
    };


}