import {Entity, model, property} from '@loopback/repository';

@model()
export class BlogComments extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  blogId: number;

  @property({
    type: 'string',
    required: true,
  })
  comment: string;

  @property({
    type: 'string',
  })
  createdAt?: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;


  constructor(data?: Partial<BlogComments>) {
    super(data);
  }
}

export interface BlogCommentsRelations {
  // describe navigational properties here
}

export type BlogCommentsWithRelations = BlogComments & BlogCommentsRelations;
