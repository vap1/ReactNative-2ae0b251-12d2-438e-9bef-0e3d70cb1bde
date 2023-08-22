
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export class TasksApi {
  static async getTasks(): Promise<Task[]> {
    try {
      const response = await axios.get<Task[]>(`${BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch tasks');
    }
  }

  static async createTask(task: Task): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/tasks`, task);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create task');
    }
  }

  static async updateTask(task: Task): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.put<UserRegistrationResponse>(`${BASE_URL}/tasks/${task.id}`, task);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update task');
    }
  }

  static async deleteTask(taskId: number): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.delete<UserRegistrationResponse>(`${BASE_URL}/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete task');
    }
  }
}