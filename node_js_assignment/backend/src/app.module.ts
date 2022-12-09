import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfiguration } from './config/typeorm.configuration';
// import { BlogsModule } from './blogs/blogs.module';
import { BlogModule } from './blog/blog.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, BlogModule, CommentModule, TypeOrmModule.forRoot(TypeORMConfiguration)],
  controllers: [],
  providers: [],
})
export class AppModule {}
