import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExampleDocument = HydratedDocument<Example>;

@Schema({ collection: 'example', timestamps: true })
export class Example {
  @Prop({ type: String, required: true })
  example: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const ExampleSchema = SchemaFactory.createForClass(Example);
