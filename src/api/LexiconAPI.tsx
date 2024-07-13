import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://intro-lemon.vercel.app';

const CLIENT = axios.create({
  baseURL: API_URL,
});

export type LinkParams = {
  url: string;
  description: string;
  keywords: string;
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

  createLink = async (link: LinkParams) => {
    const response = await this.client.post('/api/links', link);
    if (!response.data) throw new Error('Failed to create link');

    return response.data;
  };

  deleteLink = async (id: string) => {
    const response = await this.client.delete(`/api/links/${id}`);
    if (!response.data) throw new Error('Failed to delete link');

    return response.data;
  };
}
