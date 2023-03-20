export interface User {
  email: string;
  password: string;
}

export interface UserResponse {
  data: {
    user: User
    token: string
  }
}