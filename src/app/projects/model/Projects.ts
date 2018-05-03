export interface Project {
  _id: string;
  team: string;
  project_name: string;
  project_list: ProjectListItem[];
  success: boolean;
  reason: string;
}

export interface ProjectItem {
  _id: string;
  deadline: Date;
  items: string[];
  member: string;
  status: boolean;
  title: string;
}

interface ProjectListItem {
  id: string;
  project_name: string;
}

export interface ProjectDetail {
  project_name: string;
  project_list: ProjectDetailList[];
}

interface ProjectDetailList {
  list_name: string;
  list_items: ProjectItem[];
}

export interface NewProject {
  project_name: string;
  success: boolean;
  reason?: string;
}
