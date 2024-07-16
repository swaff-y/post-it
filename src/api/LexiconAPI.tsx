import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://intro-lemon.vercel.app';

const CLIENT = axios.create({
  baseURL: API_URL,
});

export type Params = {
  [key: string]: string;
};

export class LexiconAPI {
  client: AxiosInstance = CLIENT;

  fetchLinks = async () => {
    const response = await this.client.get('/api/links');
    if (!response.data) throw new Error('No links found');

    return response.data;
  };

  fetchLink = async (id: string) => {
    const response = await this.client.get(`/api/links/${id}`);
    if (!response.data) throw new Error('No link with that id found');

    return response.data;
  };

  createLink = async (params: Params) => {
    const response = await this.client.post('/api/links', params);
    if (!response.data) throw new Error('Failed to create link');

    return response.data;
  };

  updateLink = async ({id, params} : {id:string; params: Params}) => {
    const response = await this.client.post(`/api/links/${id}`, params);
    if (!response.data) throw new Error('Failed to create link');

    return response.data;
  };

  deleteLink = async (id: string) => {
    const response = await this.client.delete(`/api/links/${id}`);
    if (!response.data) throw new Error('Failed to delete link');

    return response.data;
  };
}
