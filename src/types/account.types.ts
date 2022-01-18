import { Platform } from '../lib/enum/platform';

export interface Account {
  id: number;
  userId: string;
  password?: string;
  platform: EPlatform;
  environment: string;
  description: string;
}
