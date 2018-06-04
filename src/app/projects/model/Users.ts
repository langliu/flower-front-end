export interface Users {
  user_list?: User[];
  teamMembers?: number;
  team_name?: string;
  success: boolean;
  reason?: string;
}

export interface User {
  avatar?: string;
  email?: string;
  username?: string;
  phone_number?: string;
  permission?: string;
  user_id: number;
}
