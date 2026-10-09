import axios, { AxiosInstance } from 'axios';
import { ApiResponse, Certification, ContactFormData, Profile, Project } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response interceptor for clean error unwrapping
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const customMessage =
      error.response?.data?.message ||
      error.response?.data?.errors?.[0] ||
      error.message ||
      'An unexpected network error occurred';
    return Promise.reject(new Error(customMessage));
  }
);

// Profile API
export const getProfile = async (): Promise<Profile> => {
  const response = await apiClient.get<ApiResponse<Profile>>('/profile');
  return response.data.data;
};

export const updateProfile = async (profileData: Partial<Profile>): Promise<Profile> => {
  const response = await apiClient.put<ApiResponse<Profile>>('/profile', profileData);
  return response.data.data;
};

// Projects API
export const getProjects = async (category?: string): Promise<Project[]> => {
  const params = category && category !== 'All' ? { category } : {};
  const response = await apiClient.get<ApiResponse<Project[]>>('/projects', { params });
  return response.data.data;
};

export const getProjectById = async (id: string): Promise<Project> => {
  const response = await apiClient.get<ApiResponse<Project>>(`/projects/${id}`);
  return response.data.data;
};

export const createProject = async (projectData: Partial<Project>): Promise<Project> => {
  const response = await apiClient.post<ApiResponse<Project>>('/projects', projectData);
  return response.data.data;
};

export const updateProject = async (id: string, projectData: Partial<Project>): Promise<Project> => {
  const response = await apiClient.put<ApiResponse<Project>>(`/projects/${id}`, projectData);
  return response.data.data;
};

export const deleteProject = async (id: string): Promise<void> => {
  await apiClient.delete<ApiResponse<null>>(`/projects/${id}`);
};

// Certifications API
export const getCertifications = async (): Promise<Certification[]> => {
  const response = await apiClient.get<ApiResponse<Certification[]>>('/certifications');
  return response.data.data;
};

export const createCertification = async (certData: Partial<Certification>): Promise<Certification> => {
  const response = await apiClient.post<ApiResponse<Certification>>('/certifications', certData);
  return response.data.data;
};

export const updateCertification = async (id: string, certData: Partial<Certification>): Promise<Certification> => {
  const response = await apiClient.put<ApiResponse<Certification>>(`/certifications/${id}`, certData);
  return response.data.data;
};

export const deleteCertification = async (id: string): Promise<void> => {
  await apiClient.delete<ApiResponse<null>>(`/certifications/${id}`);
};

// Contact API
export const sendContactMessage = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  const response = await apiClient.post<ApiResponse<any>>('/contact', formData);
  return {
    success: response.data.success,
    message: response.data.message || 'Message sent successfully!'
  };
};

export default apiClient;
