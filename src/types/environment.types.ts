import { Platform } from '../lib/enum/platform';

export interface Environment {
  id: number;
  name: string;
  serverDomain: string;
  clientDomain: string;
  platform: Platform;
}
