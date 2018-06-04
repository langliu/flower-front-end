export interface Task {
  title: string;
  id: number;
  deadline: Date;
  status: boolean;
  listName: string;
  projectName: string;
}

export interface MyTaskResponse {
  today: Task[];
  next: Task[];
  completed: Task[];
  success: boolean;
  reason?: string;
}
