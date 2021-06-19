import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BlogBeetleDbDataSource} from '../datasources';
import {Test, TestRelations} from '../models';

export class TestRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype.id,
  TestRelations
> {
  constructor(
    @inject('datasources.BlogBeetleDB') dataSource: BlogBeetleDbDataSource,
  ) {
    super(Test, dataSource);
  }
}
