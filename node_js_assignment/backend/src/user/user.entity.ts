import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('User')
export class UserEntity extends BaseEntity{
  @PrimaryColumn()
  id: string;

  @Column()
  fName: string;
  
  @Column()
  lName: string;
  
  @Column()
  address: string;

  @Column()
  zip: string;
 
  @Column()
  gender: string;
 
  @Column()
  mobNo: string;

  @Column()
  eMail: string;

  @Column()
  password: string;
}