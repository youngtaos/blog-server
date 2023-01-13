/* eslint-disable prettier/prettier */
import { MidwayConfig } from '@midwayjs/core';
import { Schema } from '../entity/schema';

export default {
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: 'rm-bp1m622gt2a211a1n8o.rwlb.rds.aliyuncs.com',
        port: 3306,
        username: 'root',
        password: '15922969290Mm',
        database: 'blog',
        synchronize: true, 
        logging: false,
        entities: [Schema],
      }
    }
  },
} as MidwayConfig;
