import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

import { HttpResponse } from "../utils/http-response";


export function validateRequest(
    req: Request, 
    res: Response, 
    next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return HttpResponse.badRequest( res ,"Invalid Input", errors.array());
  }
  next();
}