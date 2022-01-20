import instance from '../Default';
import { CreateEnvironmentRequest, ModifyEnvironmentRequest } from '../../../models/request';
import { EnvironmentListResponse } from './../../../models/response/index';

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
  return status === 204;
};

export const deleteEnvironment = async (id: number): Promise<boolean> => {
  const url: string = `environments/${id}`;
  const { status } = await instance.delete(url);
  return status === 204;
};

export const getEnvironmentList = async (page: number, platform?: string | null) => {
  try {
    const params = { page, platform, size: 6 };
    return await instance.get<EnvironmentListResponse>(`/environments`, { params });
  } catch (error) {
    throw error;
  }
};
