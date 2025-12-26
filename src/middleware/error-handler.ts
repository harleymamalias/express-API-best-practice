import { NextFunction, Request, Response } from "express";
import EnvironmentConfig from "../environment-config/environment-config";
import { getErrorMessage } from "../utils";

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent || EnvironmentConfig.debug) {
    next(error);
    return;
  }

  res.status(500).json({
    error: {
      message:
        getErrorMessage(error) || "Something went wrong. Please try again.",
    },
  });
}
