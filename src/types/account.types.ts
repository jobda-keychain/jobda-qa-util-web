import { Platform } from '../lib/enum/platform';

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

interface LabelEnvironment {
  id: number;
  label: string;
}
