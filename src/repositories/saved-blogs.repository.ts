import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogBeetleDbDataSource} from '../datasources';
import {SavedBlogs, SavedBlogsRelations} from '../models';

export class SavedBlogsRepository extends DefaultCrudRepository<
  SavedBlogs,
  typeof SavedBlogs.prototype.id,
  SavedBlogsRelations
> {
  constructor(
    @inject('datasources.BlogBeetleDB') dataSource: BlogBeetleDbDataSource,
  ) {
    super(SavedBlogs, dataSource);
  }
}
