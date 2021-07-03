import {Entity, model, property} from '@loopback/repository';

@model()
export class BlogLikes extends Entity {
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
  userId: string;

  @property({
    type: 'number',
    required: true,
  })
  blogId: number;

  @property({
    type: 'number',
  })
  active?: number;

  @property({
    type: 'string',
  })
  createdAt?: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;


  constructor(data?: Partial<BlogLikes>) {
    super(data);
  }
}

export interface BlogLikesRelations {
  // describe navigational properties here
}

export type BlogLikesWithRelations = BlogLikes & BlogLikesRelations;
