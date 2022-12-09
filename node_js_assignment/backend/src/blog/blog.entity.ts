import { BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('Blogs')
export class BlogEntity extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({length: 100})
  title: string;

  @Column({length: 1200})
  body: string;

  @Column({length: 20})
  tags: string;

  @Column()
  date_time: string;

  @Column()
  creator_id: string;
  
  @Column()
  likes: number;
  
  @Column()
  disLikes: number;
}
