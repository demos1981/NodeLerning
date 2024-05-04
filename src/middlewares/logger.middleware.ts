import express, { Request, Response, NextFunction } from "express";

class LoggerMiddleware {
  static async logError(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const values = [error.message, req.originalUrl, req.method, new Date()];

      await client.query(query, values);
      client.release();
    } catch (err) {
      console.error("Error occurred while logging to database:", err);
    }

    next(error);
  }
}
