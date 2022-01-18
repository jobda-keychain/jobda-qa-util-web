import { EPlatform } from '../../../lib/enum/platform';
import instance from './../Default/index';

interface EnvironmentItemResponse {
  id: number;
  name: string;
  platform: EPlatform;
}

interface EnvironmentListResponse {
  data: EnvironmentItemResponse[];
}

export const getEnvironmentList = async (platform?: string) => {
  try {
    const params = { platform };
    return await instance.get<EnvironmentListResponse>(`/environments/search`, { params });
  } catch (error) {
    throw error;
  }
};
