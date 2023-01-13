/* eslint-disable prettier/prettier */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Schema } from '../entity/schema';
import { Repository } from 'typeorm';


@Provide()
export class SchemaService {

  @InjectEntityModel(Schema)
  photoModel: Repository<Schema>;

  // save
  async saveSchema(schemaStr: string, name: string) {
    const schema = new Schema();
    schema.schema = schemaStr;
    schema.name = name
    // save entity
    let data = await this.photoModel.findOne({
        where:{
          name: name
        }
    });
    if(!data){
        data = await this.photoModel.save(schema);
    }else{
        data.schema = schemaStr;
        await this.photoModel.save(data);
    }
    return data;
  }

  async getLatestOne(name: string){
    const res = await this.photoModel.findOne({
        where:{
            name: name
        }
    });
    return res;
  }
}