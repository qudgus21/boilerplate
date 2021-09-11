import { EntityRepository, Repository } from "typeorm";
import UserEntity from "@/entity/user";

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  async createUser(email: string) {
    const user = new UserEntity();
    user.email = email;
    const newUser = await this.save(user);
    return newUser;
  }
}

export default UserRepository;
