import { IsNumber, IsString } from "class-validator";

export class CreateLoggerDto {
  @IsString()
  public method: string;

  @IsString()
  public url: string;

  @IsNumber()
  public status: number;
}
