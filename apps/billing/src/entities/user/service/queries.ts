import { queryOptions } from '@tanstack/react-query';
import { UserDto } from '../dto/user.dto';
import userService from '.';
import { mapUser } from '../mapper';
import { User } from '../model/user.model';

const userKeys = {
  all: ['users'] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: UserDto) => [...userKeys.details(), id] as const,
};

export const userQueries = {
  all: () =>
    queryOptions({
      queryKey: userKeys.all,
      queryFn: () => userService.getUsers(),
      select: (data: User[]) => {
        return data.map((user) => mapUser(user));
      },
    }),
  detail(userId: UserDto) {
    queryOptions({
      queryKey: userKeys.detail(userId),
      queryFn: () => userService.getUser(userId),
      select: (data: User) => {
        return mapUser(data);
      },
    });
  },
};
