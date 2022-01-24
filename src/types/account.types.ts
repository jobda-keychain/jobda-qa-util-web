import { Platform } from '../lib/enum/platform';

export interface Account {
  id: number;
  accountId: string;
  password?: string;
  platform: Platform;
  environment: string;
  description: string;
}
