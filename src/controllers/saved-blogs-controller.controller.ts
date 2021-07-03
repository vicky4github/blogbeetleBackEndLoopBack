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
import {SavedBlogs} from '../models';
import {SavedBlogsRepository} from '../repositories';

export class SavedBlogsControllerController {
  constructor(
    @repository(SavedBlogsRepository)
    public savedBlogsRepository : SavedBlogsRepository,
  ) {}

  @post('/saved-blogs')
  @response(200, {
    description: 'SavedBlogs model instance',
    content: {'application/json': {schema: getModelSchemaRef(SavedBlogs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedBlogs, {
            title: 'NewSavedBlogs',
            
          }),
        },
      },
    })
    savedBlogs: SavedBlogs,
  ): Promise<SavedBlogs> {
    return this.savedBlogsRepository.create(savedBlogs);
  }

  @get('/saved-blogs/count')
  @response(200, {
    description: 'SavedBlogs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SavedBlogs) where?: Where<SavedBlogs>,
  ): Promise<Count> {
    return this.savedBlogsRepository.count(where);
  }

  @get('/saved-blogs')
  @response(200, {
    description: 'Array of SavedBlogs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SavedBlogs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SavedBlogs) filter?: Filter<SavedBlogs>,
  ): Promise<SavedBlogs[]> {
    return this.savedBlogsRepository.find(filter);
  }

  @patch('/saved-blogs')
  @response(200, {
    description: 'SavedBlogs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedBlogs, {partial: true}),
        },
      },
    })
    savedBlogs: SavedBlogs,
    @param.where(SavedBlogs) where?: Where<SavedBlogs>,
  ): Promise<Count> {
    return this.savedBlogsRepository.updateAll(savedBlogs, where);
  }

  @get('/saved-blogs/{id}')
  @response(200, {
    description: 'SavedBlogs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SavedBlogs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SavedBlogs, {exclude: 'where'}) filter?: FilterExcludingWhere<SavedBlogs>
  ): Promise<SavedBlogs> {
    return this.savedBlogsRepository.findById(id, filter);
  }

  @patch('/saved-blogs/{id}')
  @response(204, {
    description: 'SavedBlogs PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedBlogs, {partial: true}),
        },
      },
    })
    savedBlogs: SavedBlogs,
  ): Promise<void> {
    await this.savedBlogsRepository.updateById(id, savedBlogs);
  }

  @put('/saved-blogs/{id}')
  @response(204, {
    description: 'SavedBlogs PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() savedBlogs: SavedBlogs,
  ): Promise<void> {
    await this.savedBlogsRepository.replaceById(id, savedBlogs);
  }

  @del('/saved-blogs/{id}')
  @response(204, {
    description: 'SavedBlogs DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.savedBlogsRepository.deleteById(id);
  }
}
