import { EPlatformToNum } from '../lib/enum/platform';

export interface IAccount {
  id: number;
  userId: string;
  password: string;
  platform: EPlatformToNum;
  environment: string;
  description: string;
}
