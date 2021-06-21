import {Entity, model, property} from '@loopback/repository';

@model()
export class BlogStatistics extends Entity {
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
    type: 'number',
    default: 0,
  })
  blogViews?: number;

  @property({
    type: 'number',
    default: 0,
  })
  blogLikes?: number;

  @property({
    type: 'string',
  })
  createdAt?: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;


  constructor(data?: Partial<BlogStatistics>) {
    super(data);
  }
}

export interface BlogStatisticsRelations {
  // describe navigational properties here
}

export type BlogStatisticsWithRelations = BlogStatistics & BlogStatisticsRelations;
