import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) { }

  getData() {
    console.log('Drawring 20 wats of power from PowerService');
    this.powerService.supplyPower(20);
    return 'data!';
  }
}
