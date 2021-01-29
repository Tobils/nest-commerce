
import {Prop, raw, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type userDocument = User & Document;

@Schema()
export class User {

    @Prop({type: String})
    name: string

    @Prop({type: String})
    password: string

    @Prop({
        type: Boolean,
        default: false
    })
    seller: boolean

    @Prop(raw({
        addr1: {type: String},
        addr2: {type: String},
        city: {type: String},
        state: {type: String},
        country: {type: String},
        zip: {type: Number},
    }))
    address:Record<string,any>

    @Prop({
        type: Date,
        default: Date.now
    })
    created: Date
}

export const UserSchema = SchemaFactory.createForClass(User);