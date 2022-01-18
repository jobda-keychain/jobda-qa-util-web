import { Platform } from '../../../lib/enum/platform';

export interface CreateEnvironmentRequest {
  name: string;
  serverDomain: string;
  clientDomain: string;
  platform: Platform;
}

export interface ModifyEnvironmentRequest {
  name: string;
  serverDomain: string;
  clientDomain: string;
}
