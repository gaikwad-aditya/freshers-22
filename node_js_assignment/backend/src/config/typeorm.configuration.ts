import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { CommentEntity } from 'src/comment/comment.entity';
import { UserEntity } from 'src/user/user.entity';
export const TypeORMConfiguration: TypeOrmModuleOptions = {
  username: 'root',
  password: 'System',
  port: 3306,
  database: 'blogs_db',
  type: 'mysql',
  host: 'localhost',
  entities: [BlogEntity, UserEntity, CommentEntity],
  synchronize: false,
};
