import { Account } from './../../types/account.types';

export interface GetAccountListResponse {
  data: Account[];
  totalPages: number;
}

export interface GetDetailResponse {
  data: Account;
}
