export interface NewListPostData {
  project_id: number;
  list_name: string;
}

export interface NewListResponse {
  success: boolean;
  reason?: string;
  project_list: ProjectList;
}

interface ProjectList {
  project_list_id: number;
  list_name: string;
  project_id: number;
}
