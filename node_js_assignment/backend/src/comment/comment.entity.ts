import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Comment')
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  blogID: string;

  @Column({length: 500})
  massage: string;

  @Column()
  date_time: string;

  @Column()
  sender_id: string;
}
