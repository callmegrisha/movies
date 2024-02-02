export interface User {
  email: string;
  id: number;
}

export interface UserResponse {
  data: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
