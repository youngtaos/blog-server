// load when NODE_ENV=production
import { MidwayConfig } from '@midwayjs/core';

export default {
  middleware: ['errorMiddleware']
} as MidwayConfig;
