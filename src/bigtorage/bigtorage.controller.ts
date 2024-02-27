import {
  Body,
  Controller,
  Headers,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BigtorageService } from './bigtorage.service';
import { CreateUserDto } from './bigtorage.dto';

@Controller('bigtorage')
export class BigtorageController {
  constructor(private bigtorageService: BigtorageService) {}

  @Post('/create')
  // @UsePipes(ValidationPipe)
  createUser(@Req() req: any, @Body() user: any) {
    // ❸ 유저 생성
    console.log(user);
    console.log(req);
    // console.log(para);
    // console.log(head);
    return 'hello'; //this.bigtorageService.createUser(user);
  }
}
