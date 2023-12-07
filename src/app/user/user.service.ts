import { User } from '@app/entities/user.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  /**
   *
   * @param request
   * @returns
   */
  async registerUser(request: User) {
    const { password, email } = request;
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) throw new HttpException('User is exits', 404);
    const created_at = new Date().toISOString();
    const hashpassword = await hash(password, 10);
    const payload = { ...request, password: hashpassword, created_at };
    const createdUser = await this.userRepository.save(payload);
    return createdUser;
  }

  /**
   *
   * @param request
   * @returns
   */
  async checkEmail(request: User) {
    const { email } = request;
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (user) {
      throw new HttpException('User is exits', 404);
    }
    return true;
  }

  /**
   *
   * @param request
   * @returns
   */
  async login(request: User) {
    const email = request.email;
    const user = await this.userRepository.findOne({ where: { email: email } });
    if (!user) throw new HttpException('User not found', 404);
    const isPasswordValid = await compare(request.password, user.password);
    if (!isPasswordValid) throw new HttpException('Password is incorrect', 400);
    const payload = { email: user.email, id: user.id };
    const token = await this.jwtService.signAsync(payload);
    return {
      access_token: token,
    };
  }

  async getUserInfor(request: User) {
    return this.userRepository.findOne({ where: { id: request.id } });
  }

  async updateUser(request: User, userId: string) {
    const userIdNumber = parseInt(userId);
    await this.userRepository.update(
      {
        id: userIdNumber,
      },
      {
        full_name: request.full_name,
        avatar: request.avatar,
        background: request.background,
        password: request.password,
      },
    );
    return true;
  }

  async updatePassword(
    request: { currentPassword: string; newPassword: string },
    userId: string,
  ) {
    const userIdNumber = parseInt(userId);
    const user = await this.userRepository.findOne({
      where: { id: userIdNumber },
    });
    const isPasswordValid = await compare(
      request.currentPassword,
      user.password,
    );
    if (!isPasswordValid) throw new HttpException('Password is incorrect', 400);
    const hashpassword = await hash(request.newPassword, 10);
    await this.userRepository.update(
      {
        id: userIdNumber,
      },
      {
        password: hashpassword,
      },
    );
    return true;
  }
}
