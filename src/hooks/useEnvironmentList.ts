import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';

const useEnvironmentList = () => {
  const [pageCount, setPageCount] = useState(1);

  const [environments, setEnvironments] = useState<Environment[]>([
    {
      id: 0,
      name: 'string',
      serverDomain: 'string',
      clientDomain: 'string',
      platform: Platform.JOBDA,
    },
  ]);

  return {
    pageCount,
    environments,
  };
};

export default useEnvironmentList;
