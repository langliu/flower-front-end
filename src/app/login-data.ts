export interface ResponseData {
  status: string;
  reason?: string;
  token?: string;
  userName?: string;
}

export interface User {
  userName: string;
  password: string;
}

export interface UserRegister {
  email: string;
  nickname: string;
  phoneNumber: string;
}
