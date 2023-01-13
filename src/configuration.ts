/* eslint-disable prettier/prettier */
import { Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import * as defaultConfig from './config/config.default';
import * as prodConfig from './config/config.prod';
import * as orm from '@midwayjs/typeorm';
import { join } from 'path';


@Configuration({
  imports: [faas, orm],
  importConfigs: [
    {
      default: defaultConfig,
      prod: prodConfig,
    },
    join(__dirname, './config')
  ],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady() {}
}
