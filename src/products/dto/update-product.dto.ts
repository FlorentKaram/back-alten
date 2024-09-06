import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { InventoryStatus } from "../product.model";

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    code: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    description: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    image: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    category: string;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    internalReference: string;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    shellId: number;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    @IsEnum(InventoryStatus, { message: 'Inventory status must be one of the following values: INSTOCK, LOWSTOCK, OUTOFSTOCK' })
    inventoryStatus: string;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    rating: number;

    updatedAt: Date;
}