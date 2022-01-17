import instance from '../Default';
import { ICreateEnvironmentDto } from './environment.dto';

export const CreateEnvironment = async (dto: ICreateEnvironmentDto): Promise<void> => {
  const url: string = `environments`;
  const { data } = await instance.post<void>(url, dto);
  return data;
};
