import { useQuery } from '@tanstack/react-query';
import { userQueries } from './queries';

export function useUsers() {
  return useQuery(userQueries.all());
}
