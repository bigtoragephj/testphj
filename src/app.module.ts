import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BigtorageModule } from './bigtorage/bigtorage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bigtorage } from './bigtorage/bigtorage.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'bigtorage',
      entities: [Bigtorage],
      synchronize: true,
      logging: true,
    }),
    BigtorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
