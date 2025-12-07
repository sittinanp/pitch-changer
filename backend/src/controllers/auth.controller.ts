import { Request, Response } from "express";

import { register , login} from "../services/auth.service";
import { RegisterDTO } from "../model/auth/dto/register.dto";
import { HttpResponse } from "../utils/http-response";
import { LoginDTO } from "../model/auth/dto/login.dto";


export async function registerController(req: Request, res: Response) {
  try {
    const register_data : RegisterDTO = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const account = await register(register_data);

    return HttpResponse.created(res,"User registered successfully", account);
  } catch (error: any) {
    return HttpResponse.badRequest(res, error.message , error);
  }
}

export async function loginController(req: Request, res: Response){
  try {
    const login_data : LoginDTO = {
      username: req.body.username,
      password: req.body.password,
    };
    const account = await login(login_data);

    return HttpResponse.ok(res,"Login successfully", account);
  } catch (error: any) {
    return HttpResponse.badRequest(res, error.message , error);
  }  
}
