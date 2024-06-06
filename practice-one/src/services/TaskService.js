import axios from 'axios';
import config from '../config/config';

const api = axios.create({
    baseURL: config.apiBaseUrl,
});

// export const fetchTasks = async () => {
//     return Promise.reject(new Error('Failed to fetch tasks.'));
// };

export const fetchTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return { data: response.data, error: null };
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return { data: null, error };
    }
};

export const createTask = async (task) => {
    try {
        const response = await api.post('/tasks', task);
        return { data: response.data, error: null };
    } catch (error) {
        console.error('Error creating task:', error);
        return { data: null, error };
    }
};

export const updateTask = async (id, updatedTask) => {
    try {
        const response = await api.put(`/tasks/${id}`, updatedTask);
        return { data: response.data, error: null };
    } catch (error) {
        console.error('Error updating task:', error);
        return { data: null, error };
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await api.delete(`/tasks/${id}`);
        return { data: response.data, error: null };
    } catch (error) {
        console.error('Error deleting task:', error);
        return { data: null, error };
    }
};

export default api;
