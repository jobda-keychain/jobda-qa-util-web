import { EPlatform } from '../lib/enum/platform';

export interface IAccount {
  id: number;
  userId: string;
  password: string;
  platform: EPlatform;
  environment: string;
  description: string;
}
