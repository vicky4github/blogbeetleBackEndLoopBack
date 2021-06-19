import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'BlogBeetleDB',
  connector: 'mysql',
  url: '',
  host: '3.7.98.9',
  port: 3306,
  user: 'blogbeetleDB',
  password: '$BKH454324',
  database: 'BlogBeetle'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BlogBeetleDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'BlogBeetleDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.BlogBeetleDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
