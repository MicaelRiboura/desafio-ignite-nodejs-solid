import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const user = this.usersRepository.findByEmail(email);
    if (user) {
      throw new Error("An User with this email already exists!");
    }

    const createdUser = this.usersRepository.create({ email, name });

    return createdUser;
  }
}

export { CreateUserUseCase };
