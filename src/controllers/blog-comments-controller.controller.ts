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
import {BlogComments} from '../models';
import {BlogCommentsRepository} from '../repositories';

export class BlogCommentsControllerController {
  constructor(
    @repository(BlogCommentsRepository)
    public blogCommentsRepository : BlogCommentsRepository,
  ) {}

  @post('/blog-comments')
  @response(200, {
    description: 'BlogComments model instance',
    content: {'application/json': {schema: getModelSchemaRef(BlogComments)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogComments, {
            title: 'NewBlogComments',
            
          }),
        },
      },
    })
    blogComments: BlogComments,
  ): Promise<BlogComments> {
    return this.blogCommentsRepository.create(blogComments);
  }

  @get('/blog-comments/count')
  @response(200, {
    description: 'BlogComments model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BlogComments) where?: Where<BlogComments>,
  ): Promise<Count> {
    return this.blogCommentsRepository.count(where);
  }

  @get('/blog-comments')
  @response(200, {
    description: 'Array of BlogComments model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BlogComments, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BlogComments) filter?: Filter<BlogComments>,
  ): Promise<BlogComments[]> {
    return this.blogCommentsRepository.find(filter);
  }

  @patch('/blog-comments')
  @response(200, {
    description: 'BlogComments PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogComments, {partial: true}),
        },
      },
    })
    blogComments: BlogComments,
    @param.where(BlogComments) where?: Where<BlogComments>,
  ): Promise<Count> {
    return this.blogCommentsRepository.updateAll(blogComments, where);
  }

  @get('/blog-comments/{id}')
  @response(200, {
    description: 'BlogComments model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BlogComments, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BlogComments, {exclude: 'where'}) filter?: FilterExcludingWhere<BlogComments>
  ): Promise<BlogComments> {
    return this.blogCommentsRepository.findById(id, filter);
  }

  @patch('/blog-comments/{id}')
  @response(204, {
    description: 'BlogComments PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogComments, {partial: true}),
        },
      },
    })
    blogComments: BlogComments,
  ): Promise<void> {
    await this.blogCommentsRepository.updateById(id, blogComments);
  }

  @put('/blog-comments/{id}')
  @response(204, {
    description: 'BlogComments PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() blogComments: BlogComments,
  ): Promise<void> {
    await this.blogCommentsRepository.replaceById(id, blogComments);
  }

  @del('/blog-comments/{id}')
  @response(204, {
    description: 'BlogComments DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.blogCommentsRepository.deleteById(id);
  }
}
