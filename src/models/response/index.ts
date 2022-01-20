import { Platform } from '../../lib/enum/platform';
import { Account } from './../../types/account.types';
import { Environment } from './../../types/environment.types';

export interface AccountListResponse {
  data: Account[];
  totalPages: number;
}

export interface DetailResponse {
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

export interface EnvironmentListResponse {
  data: Environment[];
  totalPages: number;
}

export interface LoginResponse {
  accessToken: string;
  clientDomain: string;
}
