import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
import * as uuid from 'uuid';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(CommentEntity)private commentRepository: Repository<CommentEntity>) {}

  async getComments(id: string){
    const condition = {
      blogID: id,      
    }

    const comment = await this.commentRepository
    .createQueryBuilder('Comment')
    .where('Comment.blogID = :blogID', condition)
    .getMany();
    return comment
  }

  async createComment(createCommentDto: CreateCommentDto) {
    const comment = await this.commentRepository.create();
    comment.blogID = createCommentDto.blogID;
    comment.massage = createCommentDto.massage;
    comment.date_time = createCommentDto.date_time;
    comment.sender_id = createCommentDto.sender_id;
    await comment.save();
    return comment;
  }
}
