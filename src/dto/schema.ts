/* eslint-disable prettier/prettier */
// src/dto/user.ts
import { Rule, RuleType } from '@midwayjs/validate';

export class schemaSaveDTO {
  @Rule(RuleType.string().required())
  schema: string;
}
