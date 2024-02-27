import { Injectable } from '@nestjs/common';
import { Bigtorage } from './bigtorage.entity';

@Injectable()
export class BigtorageService {
  async createUser(user) /*: Promise<Bigtorage>*/ {
    console.log(user);
    //return this.userRepository.save(user);
  }
}
