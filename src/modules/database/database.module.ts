import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: async (): Promise<MongooseModuleOptions> => {
        const uri = 'your-uri';
        return { uri };
      },
    }),
  ],
})
export class DatabaseModule {}
