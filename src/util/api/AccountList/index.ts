import instance from './../Default/index';
import { IAccount } from './../../../types/account.types';

interface AccountListResponse {
  data: IAccount[];
  totalPages: number;
}

export const getAccountList = async (
  page: number,
  platform?: string | null,
  environment?: string,
) => {
  try {
    const params = { page, platform, size: 5, environment };
    return await instance.get<AccountListResponse>(`/accounts`, { params });
  } catch (error) {
    throw error;
  }
};
