import instance from '../Default';
import { CreateEnvironmentRequest } from './environment.request';

export const CreateEnvironment = async (dto: CreateEnvironmentRequest): Promise<void> => {
  const url: string = `environments`;
  const { data } = await instance.post<void>(url, dto);
  return data;
};
