import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get('/:id')
  signIn(@Param('id') id: string ){
    return this.commentService.getComments(id)
  }

  @Post('/create')
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }
}
