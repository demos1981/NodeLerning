import { NextFunction, RequestHandler, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../entities/users.entity";
import {
  RequestWithUser,
  DataStoredInToken,
} from "../interfaces/auth.interface";

const authMiddleware = (): RequestHandler => {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const authorization =
        req.cookies["Authorization"] || req.header("Authorization")
          ? req.header("Authorization").split("Bearer")[1]
          : null;
      if (authorization) {
        const secretKey: string = process.env.ACESS_TOKEN_SECRET;
        const { id } = verify(authorization, secretKey) as DataStoredInToken;
        const user = await User.findOne({ where: { id } });
        if (user) {
          req.user = user;
          return next();
        } else {
          return res.status(401).send("Wrong authentification token");
        }
      } else {
        return res.status(401).send("Missing authentification token");
      }
    } catch (error) {
      return res.status(401).send("Wrong token authentification");
    }
  };
};

export default authMiddleware;
