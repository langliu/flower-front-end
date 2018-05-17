import {ProjectListItem} from './Projects';

export interface TaskDetail {
  success: boolean;
  reason?: string;
  progress?: number;
  item: ProjectListItem;
  tasks: Task[];
}

interface Task {
  item_detail_id: number;
  value: string;
  status: boolean;
}
