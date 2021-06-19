import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogBeetleDbDataSource} from '../datasources';
import {Blog, BlogRelations} from '../models';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype.id,
  BlogRelations
> {
  constructor(
    @inject('datasources.BlogBeetleDB') dataSource: BlogBeetleDbDataSource,
  ) {
    super(Blog, dataSource);
  }
}
