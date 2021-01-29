import { Prop, raw, Schema } from "@nestjs/mongoose";
import { User } from "./user.schema";
import * as mongoose from 'mongoose'

export type orderDocument = Order & Document;

@Schema()
export class Order{

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    })
    owner: User

    @Prop({
        type: Number,
        default: 0
    })
    totalPrice: number
    
    @Prop(raw([
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Product'
            },

            quantity: {
                type: Number,
                default: 0
            }
        }
    ]))
    products: Record<string,any>

    @Prop({
        type: Date,
        default: Date.now
    })
    created: Date


}