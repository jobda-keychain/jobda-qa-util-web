import { useCallback, useState } from 'react';
import { EPlatform } from '../lib/enum/platform';
import { IEnvironment } from '../types/environment.types';
import { CreateEnvironment } from '../util/api/environment/environment.api';

const useEnvironmentModal = (environmentValue?: IEnvironment) => {
  const [environment, setEnvironment] = useState(
    environmentValue ?? {
      id: 0,
      name: '',
      serverDomain: '',
      clientDomain: '',
      platform: EPlatform.JOBDA,
    },
  );

  const onChangeEnvironment = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setEnvironment({
        ...environment,
        [e.target.name]: e.target.value,
      }),
    [environment],
  );

  const onClickCreateEnvironment = useCallback(async () => {
    try {
      await CreateEnvironment(environment);
    } catch (error: any) {
      // 실패
    }
  }, [environment]);

  const onClickModifyEnvironment = useCallback(async () => {
    try {
    } catch (error: any) {
      // 실패
    }
  }, []);

  return { environment, onChangeEnvironment, onClickCreateEnvironment, onClickModifyEnvironment };
};

export default useEnvironmentModal;
