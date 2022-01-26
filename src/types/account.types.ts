import { Platform } from '../lib/enum/platform';
import { EnvironmentOptionsType } from './../models/vo/index';

export interface Account {
  id: number;
  accountId: string;
  password?: string;
  platform: Platform;
  environment: string;
  description: string;
}

export interface AccountStateInterface {
  filters?: EnvironmentOptionsType[];
  currentPage: number;
  tabNumber: number;
}
