import { Platform } from '../../lib/enum/platform';
import { Account } from './../../types/account.types';

export interface GetAccountListResponse {
  data: Account[];
  totalPages: number;
}

export interface GetDetailResponse {
  data: Account;
}

export interface FilterItemResponse {
  id: number;
  name: string;
  platform: Platform;
}

export interface FilterListResponse {
  data: FilterItemResponse[];
}
