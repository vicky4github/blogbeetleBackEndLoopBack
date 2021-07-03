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
import {BlogLikes} from '../models';
import {BlogLikesRepository} from '../repositories';

export class BlogLikesControllerController {
  constructor(
    @repository(BlogLikesRepository)
    public blogLikesRepository : BlogLikesRepository,
  ) {}

  @post('/blog-likes')
  @response(200, {
    description: 'BlogLikes model instance',
    content: {'application/json': {schema: getModelSchemaRef(BlogLikes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogLikes, {
            title: 'NewBlogLikes',
            
          }),
        },
      },
    })
    blogLikes: BlogLikes,
  ): Promise<BlogLikes> {
    return this.blogLikesRepository.create(blogLikes);
  }

  @get('/blog-likes/count')
  @response(200, {
    description: 'BlogLikes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BlogLikes) where?: Where<BlogLikes>,
  ): Promise<Count> {
    return this.blogLikesRepository.count(where);
  }

  @get('/blog-likes')
  @response(200, {
    description: 'Array of BlogLikes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BlogLikes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BlogLikes) filter?: Filter<BlogLikes>,
  ): Promise<BlogLikes[]> {
    return this.blogLikesRepository.find(filter);
  }

  @patch('/blog-likes')
  @response(200, {
    description: 'BlogLikes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogLikes, {partial: true}),
        },
      },
    })
    blogLikes: BlogLikes,
    @param.where(BlogLikes) where?: Where<BlogLikes>,
  ): Promise<Count> {
    return this.blogLikesRepository.updateAll(blogLikes, where);
  }

  @get('/blog-likes/{id}')
  @response(200, {
    description: 'BlogLikes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BlogLikes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BlogLikes, {exclude: 'where'}) filter?: FilterExcludingWhere<BlogLikes>
  ): Promise<BlogLikes> {
    return this.blogLikesRepository.findById(id, filter);
  }

  @patch('/blog-likes/{id}')
  @response(204, {
    description: 'BlogLikes PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogLikes, {partial: true}),
        },
      },
    })
    blogLikes: BlogLikes,
  ): Promise<void> {
    await this.blogLikesRepository.updateById(id, blogLikes);
  }

  @put('/blog-likes/{id}')
  @response(204, {
    description: 'BlogLikes PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() blogLikes: BlogLikes,
  ): Promise<void> {
    await this.blogLikesRepository.replaceById(id, blogLikes);
  }

  @del('/blog-likes/{id}')
  @response(204, {
    description: 'BlogLikes DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.blogLikesRepository.deleteById(id);
  }
}
