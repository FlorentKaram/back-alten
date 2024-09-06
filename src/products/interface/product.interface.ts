import { CreateProductDto } from "../dto/create-product.dto";
import { FilterProductDto } from "../dto/filter-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { Product } from "../product.model";

export abstract class ProductDataGateway {
    getProductById: (id: string) => Promise<Product>;

    getProducts: (filter: FilterProductDto) => Promise<Product[]>;
    
    countProducts: (name: string) => Promise<number>;

    createProduct: (product: CreateProductDto) => Promise<Product>;

    updateProduct: (id: string, product: UpdateProductDto) => Promise<Product>;
    
    deleteProductById: (id: string) => Promise<Product>;
}