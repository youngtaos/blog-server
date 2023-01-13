/* eslint-disable prettier/prettier */
import {
    Provide,
    Inject,
    Controller,
    Get,
    Post,
    Body,
    Headers
  } from '@midwayjs/decorator';

import { Context } from '@midwayjs/faas';
import { SchemaService } from '../service/schema';
import { getStandardResponse } from '../util/common';
import {AuthenticationClient} from 'authing-js-sdk';



@Provide()
@Controller('/api/schema/')
export class schemaController {
  @Inject()
  ctx: Context;

  @Inject()
  schemaService:SchemaService

  @Get('/getLatestOne')
  async getLatestOne(@Headers('token') token: string){
    const authing = new AuthenticationClient({
      appId: '63858a0caa6255ed2a69abe7',
      appHost: 'https://yutousi.authing.cn',
      token,
    })

    const user = await authing.getCurrentUser();
    console.log(token);
    const name = user?.username || user?.phone;
    const result = await this.schemaService.getLatestOne(name);
    return getStandardResponse(true, result);
  }

  @Post('/save')
  async saveSchema(@Body('schema') schema: string, @Headers('token') token: string) {
    const authing = new AuthenticationClient({
      appId: '63858a0caa6255ed2a69abe7',
      appHost: 'https://yutousi.authing.cn',
      token,
    })

    const user = await  authing.getCurrentUser();
    const name = user?.username || user?.phone;
    const res = this.schemaService.saveSchema(schema, name);
    return res;
  }
}