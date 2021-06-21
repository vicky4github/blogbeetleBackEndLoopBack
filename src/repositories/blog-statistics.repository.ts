import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogBeetleDbDataSource} from '../datasources';
import {BlogStatistics, BlogStatisticsRelations} from '../models';

export class BlogStatisticsRepository extends DefaultCrudRepository<
  BlogStatistics,
  typeof BlogStatistics.prototype.id,
  BlogStatisticsRelations
> {
  constructor(
    @inject('datasources.BlogBeetleDB') dataSource: BlogBeetleDbDataSource,
  ) {
    super(BlogStatistics, dataSource);
  }
}
