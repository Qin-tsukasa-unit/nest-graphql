import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './user';

const userTable = [
  {
    id: '1',
    firstName: 'first',
    lastName: 'last',
    age: '20',
  },
  {
    id: '2',
    firstName: 'first2',
    lastName: 'last2',
    age: '30',
  },
  {
    id: '3',
    firstName: 'first3',
    lastName: 'last3',
    age: '40',
  },
];

@Resolver('Users')
export class UsersResolver {
  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return userTable;
  }
}
