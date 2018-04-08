export interface ResopnseData {
  status: string;
  reason: string;
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
