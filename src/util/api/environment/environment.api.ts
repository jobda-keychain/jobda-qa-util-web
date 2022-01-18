import instance from '../Default';
import { CreateEnvironmentRequest, ModifyEnvironmentRequest } from './environment.request';

export const createEnvironment = async (request: CreateEnvironmentRequest): Promise<boolean> => {
  const url: string = `environments`;
  const { status } = await instance.post(url, request);
  return status === 201;
};

export const modifyEnvironment = async (
  id: number,
  request: ModifyEnvironmentRequest,
): Promise<boolean> => {
  const url: string = `environments/${id}`;
  const { status } = await instance.put(url, request);
};
  
export const DeleteEnvironment = async (id: number): Promise<boolean> => {
  const url: string = `environments/${id}`;
  const { status } = await instance.delete(url);
  return status === 204;
};
