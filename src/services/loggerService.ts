import { Logger } from "src/entities/logger.entity";
import { CreateLoggerDto } from "../../src/dto/logger.dto";

export const createLogger = async (createLoggerData: CreateLoggerDto) => {
  const { method, url, status } = createLoggerData;
  const newLog: Logger = await Logger.save({
    method,
    url,
    status,
  });
  return newLog;
};
