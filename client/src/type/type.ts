// Task type
export interface TaskType {
  id: number;
  task: string;
  user_id: number;
  is_complete: boolean;
}

// Filter tusk type
export interface FilterTaskType {
  filter: string | undefined;
}

// User type
export interface UserType {
  id: number;
  name: string;
  email: string;
  password: string | number;
}

// Auth type
export interface AuthType {
  accessToken: undefined | string;
  user: undefined | UserType;
}
