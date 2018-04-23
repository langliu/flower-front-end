export interface Users {
  users?: User[];
  teamMembers?: number;
  teamName?: string;
  success: boolean;
  reason?: string;
}

export interface User {
  email: string;
  password: string;
  checkPassword: string;
  userName: string;
  phoneNumber: string;
}
