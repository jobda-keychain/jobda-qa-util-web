import { Platform } from '../lib/enum/platform';
import { EnvironmentOptionsType } from './../models/vo/index';

export interface Account {
  id: number;
  accountId: string;
  password?: string;
  platform: Platform;
  environment: string;
}

export interface DetailAccount {
  id: number;
  accountId: string;
  password: string;
  platform: Platform;
  environment: LabelEnvironment;
  description: string;
}

export interface AccountStateInterface {
  filters?: EnvironmentOptionsType[];
  currentPage: number;
  tabNumber: number;

