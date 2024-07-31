import { User } from '../model/user.model';
import { UserDto } from '../dto/user.dto';
import Service from '@/shared/service';

class UserService extends Service {
  getUsers() {
    return this.http.get<User[]>('/users');
  }

  getUser(id: UserDto) {
    return this.http.get<User>(`/user?id=${id}`);
  }
}

const userService = new UserService();
export default userService;
