import {Entity, model, property} from '@loopback/repository';

@model()
export class Blog extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  coverImgSrc?: string;

  @property({
    type: 'string',
  })
  subTitle?: string;

  @property({
    type: 'string',
  })
  authorId?: string;

  @property({
    type: 'string',
  })
  blogContent?: string;


  @property({
    type: 'string',
  })
  published?: string;

  @property({
    type: 'string',
  })
  categories?: string;

  @property({
    type: 'string',
  })
  createdAt?: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;


  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  // describe navigational properties here
}

export type BlogWithRelations = Blog & BlogRelations;
