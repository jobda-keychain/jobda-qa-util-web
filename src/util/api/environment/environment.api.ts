import instance from '../Default';
import { CreateEnvironmentRequest } from './environment.request';

export const CreateEnvironment = async (dto: CreateEnvironmentRequest): Promise<boolean> => {
  const url: string = `environments`;
  const { status } = await instance.post(url, dto);
  return status === 201;
};

export const DeleteEnvironment = async (id: number): Promise<boolean> => {
  const url: string = `environments/${id}`;
  const { status } = await instance.delete(url);
  return status === 204;
};
