import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'user' })
@ObjectType()
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  age: number;
}
