import { NextFunction, Response } from "express";
import { RequestWithUser } from "../../src/interfaces/auth.interface";

export const roleMiddleware =
  (...roles) =>
  (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userRole = req.user.role;
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: "Acess denied" });
    }
    next();
  };


