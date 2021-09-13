import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import UserRepository from "@/repository/user";
import ErrorResponse from "@/utils/errorResponse";
import { unable } from "@/constants/error";

@Service()
class UsersService {
  private userRepository: UserRepository;

  constructor(
    @InjectRepository(UserRepository) userRepository: UserRepository
  ) {
    this.userRepository = userRepository;
  }

  async createUser({ email }: { email: string }) {
    try {
      const createdUser = await this.userRepository.createUser(email);
      const { idx, createdAt, updatedAt } = createdUser;
      return { idx, createdAt, updatedAt };
    } catch (e) {
      throw new ErrorResponse(unable("create user"));
    }
  }
}

export default UsersService;
