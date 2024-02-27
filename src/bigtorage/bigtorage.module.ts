import { Module } from '@nestjs/common';
import { BigtorageService } from './bigtorage.service';
import { BigtorageController } from './bigtorage.controller';

@Module({
  providers: [BigtorageService],
  controllers: [BigtorageController]
})
export class BigtorageModule {}
