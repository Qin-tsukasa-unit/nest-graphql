import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { getRepository } from 'typeorm';
import { User } from '../entity/user.entity';

@Resolver('Users')
export class UsersResolver {
  @Query((returns) => [User])
  async users(): Promise<User[]> {
    const userRepository = getRepository(User);
    return await userRepository.find();
  }

  @Mutation((returns) => User)
  async registerUser(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('age') age: number,
  ): Promise<User> {
    const userRepository = getRepository(User);
    const user = userRepository.create({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
    await userRepository.save(user);
    return user;
  }
}
