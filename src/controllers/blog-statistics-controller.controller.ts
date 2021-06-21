import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {BlogStatistics} from '../models';
import {BlogStatisticsRepository} from '../repositories';

export class BlogStatisticsControllerController {
  constructor(
    @repository(BlogStatisticsRepository)
    public blogStatisticsRepository : BlogStatisticsRepository,
  ) {}

  @post('/blog-statistics')
  @response(200, {
    description: 'BlogStatistics model instance',
    content: {'application/json': {schema: getModelSchemaRef(BlogStatistics)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogStatistics, {
            title: 'NewBlogStatistics',
            
          }),
        },
      },
    })
    blogStatistics: BlogStatistics,
  ): Promise<BlogStatistics> {
    return this.blogStatisticsRepository.create(blogStatistics);
  }

  @get('/blog-statistics/count')
  @response(200, {
    description: 'BlogStatistics model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BlogStatistics) where?: Where<BlogStatistics>,
  ): Promise<Count> {
    return this.blogStatisticsRepository.count(where);
  }

  @get('/blog-statistics')
  @response(200, {
    description: 'Array of BlogStatistics model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BlogStatistics, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BlogStatistics) filter?: Filter<BlogStatistics>,
  ): Promise<BlogStatistics[]> {
    return this.blogStatisticsRepository.find(filter);
  }

  @patch('/blog-statistics')
  @response(200, {
    description: 'BlogStatistics PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogStatistics, {partial: true}),
        },
      },
    })
    blogStatistics: BlogStatistics,
    @param.where(BlogStatistics) where?: Where<BlogStatistics>,
  ): Promise<Count> {
    return this.blogStatisticsRepository.updateAll(blogStatistics, where);
  }

  @get('/blog-statistics/{id}')
  @response(200, {
    description: 'BlogStatistics model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BlogStatistics, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BlogStatistics, {exclude: 'where'}) filter?: FilterExcludingWhere<BlogStatistics>
  ): Promise<BlogStatistics> {
    return this.blogStatisticsRepository.findById(id, filter);
  }

  @patch('/blog-statistics/{id}')
  @response(204, {
    description: 'BlogStatistics PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogStatistics, {partial: true}),
        },
      },
    })
    blogStatistics: BlogStatistics,
  ): Promise<void> {
    await this.blogStatisticsRepository.updateById(id, blogStatistics);
  }

  @put('/blog-statistics/{id}')
  @response(204, {
    description: 'BlogStatistics PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() blogStatistics: BlogStatistics,
  ): Promise<void> {
    await this.blogStatisticsRepository.replaceById(id, blogStatistics);
  }

  @del('/blog-statistics/{id}')
  @response(204, {
    description: 'BlogStatistics DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.blogStatisticsRepository.deleteById(id);
  }
}
