import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): any {
    return {
      name: 'Mountain Bike Technical assessment server',
      version: 0.0    
    };
  }
}
