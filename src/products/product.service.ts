import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { ProductDataGateway } from "./interface/product.interface";
import { FilterProductDto } from "./dto/filter-product.dto";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductService {

    constructor(private productDataGateway: ProductDataGateway) { }

    // This method returns all products
    async findAll(filter: FilterProductDto) {
        let products = await this.productDataGateway.getProducts(filter);
        if(!products || products.length == 0){
            throw new NotFoundException("No products found");
        }
        let numberOfProduct = await this.productDataGateway.countProducts(filter.name);
        return {
            products: products,
            numberOfProduct: numberOfProduct,
            page: filter.currentPage,
        }
    }

    // This method returns a single product
    async findOne(id: string) {
        let product = await this.productDataGateway.getProductById(id);

        if(!product){
            throw new NotFoundException("Product not found");
        }
        return product;
    }

    // This method creates a product
    async create(createProductDto: CreateProductDto) {
        let product = await this.productDataGateway.createProduct(createProductDto);
        if(!product){
            throw new HttpException("Product not created", 400);
        }
        return product;
    }

    // This method updates a product
    async update(id: string, updateProductDto: UpdateProductDto) {
        let product = await this.productDataGateway.updateProduct(id, updateProductDto);
        if(!product){
            throw new HttpException("Product not found", 404);
        }
        return product;
    }

    // This method removes a product
    async remove(id: string) {
        let product = await this.productDataGateway.deleteProductById(id);
        if(!product){
            throw new HttpException("Product not found", 404);
        }
        return product;
    }

}