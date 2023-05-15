import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Track } from '../track/shemas/track.shema';
import * as mongoose from 'mongoose'

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  
  @Prop()
  name: string;

  @Prop()
 numbers: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Album'})
  list: Track[];


  
}

export const AlbumSchema = SchemaFactory.createForClass(Album);