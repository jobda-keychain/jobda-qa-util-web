import { Platform } from '../../lib/enum/platform';

export interface AddAccountRequest {
  userId: string;
  password: string;
  environmentId: number | null;
  description: string;
}

export interface ModifyAccountRequest {
  userId: string;
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
