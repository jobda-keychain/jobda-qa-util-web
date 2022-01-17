import { useCallback, useState } from 'react';
import { EPlatform } from '../lib/enum/platform';
import { IEnvironment } from '../types/environment.types';
import { CreateEnvironment } from '../util/api/environment/environment.api';
import { ICreateEnvironmentDto } from '../util/api/environment/environment.dto';

const useEnvironment = () => {
  const [pageCount, setPageCount] = useState(1);

  const [environments, setEnvironments] = useState<IEnvironment[]>([]);

  const onClickCreateEnvironment = useCallback(async (environment: ICreateEnvironmentDto) => {
    try {
      await CreateEnvironment(environment);
    } catch (error: any) {
      // 실패
    }
  }, []);

  return { pageCount, environments, onClickCreateEnvironment };
};

export default useEnvironment;
