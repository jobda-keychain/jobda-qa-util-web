import instance from './../Default/index';
import { AccountListResponse, FilterListResponse, LoginResponse } from '../../../models/response';
import { AddAccountRequest, ModifyAccountRequest } from '../../../models/request';

export const getAccountList = async (
  page: number,
  platform?: string | null,
  environment?: string,
) => {
  try {
    const params = { page, platform, size: 6, environment };
    return await instance.get<AccountListResponse>(`/accounts`, { params });
  } catch (error) {
    throw error;
  }
};

export const addAccount = async (data: AddAccountRequest) => {
  try {
    return await instance.post(`/accounts`, data);
  } catch (error) {
    throw error;
  }
};

export const modifyAccount = async (data: ModifyAccountRequest, id?: number) => {
  try {
    return await instance.put(`/accounts/${id}`, data);
  } catch (error) {
    throw error;
  }
};

export const getDetail = (id?: number) => {
  try {
    return instance.get(`/accounts/details/${id}`);
  } catch (error) {
    throw error;
  }
};

export const deleteAccount = (id?: number) => {
  try {
    return instance.delete(`/accounts/${id}`);
  } catch (error) {
    throw error;
  }
};

export const getFilterList = async (platform?: string) => {
  try {
    const params = { platform };
    return await instance.get<FilterListResponse>(`/environments/search`, { params });
  } catch (error) {
    throw error;
  }
};

export const getEnvironmemtName = async () => {
  try {
    return await instance.get<FilterListResponse>(`/environments/names`);
  } catch (error) {
    throw error;
  }
};

export const login = async (id: number) => {
  return await instance.post<LoginResponse>(`/accounts/${id}`);
};
