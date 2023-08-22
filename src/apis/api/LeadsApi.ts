
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Lead {
  id: number;
  name: string;
  contact: string;
  status: string;
  // Add other lead properties here
}

export interface LeadDetails {
  // Define the fields for lead details here
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errorMessage?: string;
}

export async function getLeads(): Promise<ApiResponse<Lead[]>> {
  try {
    const response = await axios.get<ApiResponse<Lead[]>>(`${BASE_URL}/leads`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leads:', error);
    return { success: false, errorMessage: 'Failed to fetch leads' };
  }
}

export async function createLead(leadDetails: LeadDetails): Promise<ApiResponse<Lead>> {
  try {
    const response = await axios.post<ApiResponse<Lead>>(`${BASE_URL}/leads`, leadDetails);
    return response.data;
  } catch (error) {
    console.error('Error creating lead:', error);
    return { success: false, errorMessage: 'Failed to create lead' };
  }
}

export async function updateLead(leadId: number, leadDetails: LeadDetails): Promise<ApiResponse<Lead>> {
  try {
    const response = await axios.put<ApiResponse<Lead>>(`${BASE_URL}/leads/${leadId}`, leadDetails);
    return response.data;
  } catch (error) {
    console.error('Error updating lead:', error);
    return { success: false, errorMessage: 'Failed to update lead' };
  }
}

export async function deleteLead(leadId: number): Promise<ApiResponse<void>> {
  try {
    const response = await axios.delete<ApiResponse<void>>(`${BASE_URL}/leads/${leadId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting lead:', error);
    return { success: false, errorMessage: 'Failed to delete lead' };
  }
}