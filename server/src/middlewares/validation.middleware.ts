import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";

export const getErrorMessage = (
  errors: ValidationError[],
  existingMessage
): string => {
  return errors
    .map((error: ValidationError) => {
      if (error.constraints) {
        return existingMessage + Object.values(error.constraints).join(",");
      } else if (error.children) {
        return getErrorMessage(error.children, existingMessage);
      } else {
        return "";
      }
    })
    .join(",");
};

export const validationMiddleware = (
  type: any,
  value: string | "body" | "query" | "params" = "body",
  skipMissingProperties = false,
  whitelist = true,
  forbidNonWhitelisted = true
): RequestHandler => {
  return (req, res, next) => {
    validate(plainToInstance(type, req[value]), {
      skipMissingProperties,
      whitelist,
      forbidNonWhitelisted,
    }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const errorMessage = getErrorMessage(errors, "");
      } else {
        next();
      }
    });
  };
};
