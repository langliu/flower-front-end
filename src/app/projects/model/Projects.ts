export interface Project {
  projects: ProjectItem[];
  success: boolean;
  reason: string;
}

export interface ProjectItem {
  project_id: number;
  project_name: string;
  team_id: number;
}

export interface ProjectDetail {
  success: boolean;
  project_list: ProjectDetailList[];
  reason?: string;
}

export interface ProjectDetailList {
  project_list_id: number;
  list_name: string;
  project_list_item: ProjectListItem[];
}

export interface NewProject {
  success: boolean;
  reason?: string;
  project: ProjectItem;
}

export interface ProjectListItem {
  list_item_id?: number;
  title?: string;
  status?: boolean;
  deadline?: string | null;
  username?: string | null;
  user_id?: number | null;
  description?: string;
}

export interface NewCard {
  title: string;
  project_list_id: number;
}

export interface NewCardResponse {
  success: boolean;
  list_item: NewCard;
}
