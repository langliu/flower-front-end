import {User} from './Users';

export interface ChangePhoneNumberPostData {
  userId: number;
  password: string;
  phoneNumber: string;
}

export interface ChangePhoneNumberResponse {
  success: boolean;
  reason?: string;
  user: User;
}
