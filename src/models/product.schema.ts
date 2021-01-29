import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose'
import {User} from './user.schema'

export type productDocument = Product & Document;

@Schema()
export class Product{
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    })
    owner: User

    @Prop({type: String})
    title: string

    @Prop({type: String})
    description: string

    @Prop({type: String})
    image: string

    @Prop({type: String})
    price: string

    @Prop({
        type: Date,
        default: Date.now
    })
    created: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);