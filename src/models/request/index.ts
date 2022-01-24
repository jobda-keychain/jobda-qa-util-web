import { Platform } from '../../lib/enum/platform';

export interface AddAccountRequest {
  accountId: string;
  password: string;
  environmentId: number | null;
  description: string;
}

export interface ModifyAccountRequest {
  accountId: string;
  password: string;
  description: string;
}

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
