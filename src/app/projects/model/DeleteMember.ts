export interface DeleteMember {
  userId: string;
  teamId: string;
}

export interface DeleteResponse {
  success: boolean;
  reason?: string;
}
