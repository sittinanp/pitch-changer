export interface User {
  id: string;
  email: string;
  username?: string;
}

export interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  user: User | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Account {
  id: string;
  email: string;
  username: string;
}

export interface AuthResponse {
  accessToken: string;
  account: Account;
}

export interface RefreshResponse {
  accessToken: string;
}