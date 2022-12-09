import { Controller, Get, Post, Body, Param, Patch} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create.blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogsService: BlogService) {}

  @Get()
  getAllBlogs() {
    return this.blogsService.getAllBlogs();
  }

  @Patch('/:id/:count/:oprn')
  updateTask(@Param('id') id: string, @Param('count') count: number, @Param('oprn') oprn: string){
    return this.blogsService.updateBlog(id, count, oprn)
  }

  @Post('/create')
  createBlogs(@Body() createBlogsDto: CreateBlogDto) {
    return this.blogsService.createBlogs(createBlogsDto);
  }
}
