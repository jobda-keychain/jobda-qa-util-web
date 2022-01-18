import { Platform } from '../../../lib/enum/platform';
import instance from './../Default/index';

interface EnvironmentItemResponse {
  id: number;
  name: string;
  platform: Platform;
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
