import { IsString, IsNotEmpty } from "class-validator";
import { UserRole } from "../interfaces/user.interface";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string;

  @IsNotEmpty()
  @IsString()
  public role: UserRole;
}
