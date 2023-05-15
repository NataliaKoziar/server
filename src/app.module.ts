import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import {ServeStaticModule} from '@nestjs/serve-static'
import * as path from 'path';
// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";

@Module({
   imports:[
    ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb+srv://nkoziar:NATALKA18@cluster0.fb1t6bc.mongodb.net/?retryWrites=true&w=majority'),
    TrackModule,
    FileModule
]
})

export class AppModule{}