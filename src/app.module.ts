import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from './models/user.schema';

@Module({
  imports:[ConfigModule.forRoot({
    envFilePath:'.dev.env',
    isGlobal: true
  }),
  MongooseModule.forRoot(process.env.MONGO_URI),
  MongooseModule.forFeature([{
    name: User.name,
    schema: UserSchema
  }])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
