export interface ResponseData {
  success: boolean;
  reason?: string;
  user: UserInfo;
}

export interface UserInfo {
  email: string;
  token: string;
  user_id: number;
  phone_number: number;
  username: string;
  active_team: number;
}

export interface User {
  email: string;
  password: string;
}

export interface UserRegister {
  email: string;
  nickname: string;
  phoneNumber: string;
}
