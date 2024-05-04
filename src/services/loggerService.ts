import { Logger } from "src/entities/logger.entity";
import { loggerType } from "src/interfaces/logger.interfaces";

export const getAllLoggs = async () => {
  const [loggs, count] = await Logger.findAndCount({});
  return {
    loggs,
    count,
  };
};

export const createLogger = async (createLoggerData: loggerType) => {
  const { method, url, status } = createLoggerData;
  const newLog: Logger = await Logger.save({
    method,
    url,
    status,
  });
  return newLog;
};
