import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsString()
  public email: string;

  @IsNotEmpty()
  @IsOptional()
  public password: string;
}
