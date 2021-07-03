import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogBeetleDbDataSource} from '../datasources';
import {BlogLikes, BlogLikesRelations} from '../models';

export class BlogLikesRepository extends DefaultCrudRepository<
  BlogLikes,
  typeof BlogLikes.prototype.id,
  BlogLikesRelations
> {
  constructor(
    @inject('datasources.BlogBeetleDB') dataSource: BlogBeetleDbDataSource,
  ) {
    super(BlogLikes, dataSource);
  }
}
