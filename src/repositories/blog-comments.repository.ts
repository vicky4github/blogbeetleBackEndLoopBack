import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogBeetleDbDataSource} from '../datasources';
import {BlogComments, BlogCommentsRelations} from '../models';

export class BlogCommentsRepository extends DefaultCrudRepository<
  BlogComments,
  typeof BlogComments.prototype.id,
  BlogCommentsRelations
> {
  constructor(
    @inject('datasources.BlogBeetleDB') dataSource: BlogBeetleDbDataSource,
  ) {
    super(BlogComments, dataSource);
  }
}
