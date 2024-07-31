import { UserDto } from '../dto/user.dto';
import { User } from '../model/user.model';

export const mapUser = (dto: User) => ({
  id: +dto.id,
  name: dto.name,
});
