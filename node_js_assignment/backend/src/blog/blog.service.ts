import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { CreateBlogDto } from './dto/create.blog.dto';
import * as uuid from 'uuid';

@Injectable()
export class BlogService {
  constructor(@InjectRepository(BlogEntity)private blogsRepository: Repository<BlogEntity>) {}

  async getAllBlogs() {
    return await this.blogsRepository.find();
  }
  
  async updateBlog(id: string, count: number, oprn: string){
    const blog = await this.blogsRepository.findOneBy({id})

    if(oprn === 'like'){
      blog.likes = count
    }

    if(oprn === 'disLike'){
      blog.disLikes = count
    }

    await blog.save()

    return blog
  }


  async createBlogs(createBlogsDto: CreateBlogDto) {
    const blogs = await this.blogsRepository.create();
    blogs.id = uuid.v4()
    blogs.title = createBlogsDto.title;
    blogs.body = createBlogsDto.body;
    blogs.tags = createBlogsDto.tags;
    blogs.date_time = createBlogsDto.date_time;
    blogs.creator_id = createBlogsDto.creator_id;
    blogs.likes = 1;
    blogs.disLikes = 1;

    await blogs.save();
    return blogs;
  }
}
