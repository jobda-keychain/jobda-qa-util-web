import { Platform } from '../../../lib/enum/platform';

export interface CreateEnvironmentRequest {
  name: string;
  serverDomain: string;
  clientDomain: string;
  platform: Platform;
}
