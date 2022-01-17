import { EPlatform } from '../../../lib/enum/platform';

export interface ICreateEnvironmentDto {
  name: string;
  serverDomain: string;
  clientDomain: string;
  platform: EPlatform;
}
