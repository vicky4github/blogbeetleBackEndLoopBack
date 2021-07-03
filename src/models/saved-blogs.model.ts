import {Entity, model, property} from '@loopback/repository';

@model()
export class SavedBlogs extends Entity {
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


  constructor(data?: Partial<SavedBlogs>) {
    super(data);
  }
}

export interface SavedBlogsRelations {
  // describe navigational properties here
}

export type SavedBlogsWithRelations = SavedBlogs & SavedBlogsRelations;
