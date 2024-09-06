import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilterProductDto } from './dto/filter-product.dto';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController{
    constructor(private productService: ProductService) { }

    @ApiOperation({ summary: 'Get all products' })
    @Post('all')
    async findAll(@Body() filter: FilterProductDto) {
        return this.productService.findAll(filter);
    }

    @ApiOperation({ summary: 'Get a single product by id' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.productService.findOne(id);
    }

    @ApiOperation({ summary: 'Create a product' })
    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @ApiOperation({ summary: 'Update a product' })
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto);
    }

    @ApiOperation({ summary: 'Delete a product' })
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.productService.remove(id);
    }
    
}