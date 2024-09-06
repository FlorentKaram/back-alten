import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class FilterProductDto{
    @IsNumber()
    @ApiProperty()
    currentPage: number;

    @IsNumber()
    @ApiProperty()
    productPerPage: number;

    @IsString()
    @ApiProperty()
    name: string;
}