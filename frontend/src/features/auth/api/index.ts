import type { AuthResponse, LoginRequest } from "../types";
import api from "@api/axios";

export async function login(login_req : LoginRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/login", {
    username : login_req.username,
    password : login_req.password,
  });
  console.log(response);
  return response.data;
}