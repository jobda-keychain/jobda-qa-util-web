import instance from '../Default';
import { CreateEnvironmentRequest } from './environment.request';

export const CreateEnvironment = async (dto: CreateEnvironmentRequest): Promise<boolean> => {
  const url: string = `environments`;
  const { status } = await instance.post(url, dto);
  return status === 201;
};
