import { SchemaFactory } from "@nestjs/mongoose";
import { Prop, Schema } from "@nestjs/mongoose/dist/decorators";

export type ProductDocument = Product & Document;

export enum InventoryStatus {
    INSTOCK = 'INSTOCK',
    LOWSTOCK = 'LOWSTOCK',
    OUTOFSTOCK = 'OUTOFSTOCK',
}

@Schema()
export class Product {
    @Prop()
    code: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    category: string;

    @Prop()
    price: number;

    @Prop()
    quantity: number;

    @Prop()
    internalReference: string;

    @Prop()
    shellId: number;

    @Prop({enum: InventoryStatus, default: InventoryStatus.OUTOFSTOCK})
    inventoryStatus: string;

    @Prop()
    rating: number;

    @Prop({default: Date.now()})
    createdAt: Date;

    @Prop({default: Date.now()})
    updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);