import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://intro-lemon.vercel.app';

const CLIENT = axios.create({
  baseURL: API_URL,
});

export type LinkParams = {

};

export class LexiconAPI {
  client: AxiosInstance = CLIENT;

  fetchLinks = async () => {
    const response = await this.client.get('/api/links');
    if (!response.data) throw new Error('No links found');

    return response.data;
  };

  fetchLink = async (id: string) => {
    const response = await this.client.get(`meetings`, {
      params: {
        id,
      },
    });
    if (!response.data) throw new Error('No link with that id found');

    return response.data;
  };
}