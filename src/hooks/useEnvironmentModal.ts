import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';
import { CreateEnvironment, ModifyEnvironment } from '../util/api/environment/environment.api';

const useEnvironmentModal = (onClose: () => void, environmentValue?: Environment) => {
  const [environment, setEnvironment] = useState(
    environmentValue ?? {
      id: 0,
      name: '',
      serverDomain: '',
      clientDomain: '',
      platform: Platform.JOBDA,
    },
  );

  const onChangeEnvironment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEnvironment({
      ...environment,
      [e.target.name]: e.target.value,
    });

  const onClickCreateEnvironment = useCallback(async () => {
    try {
      await CreateEnvironment(environment);
      onClose();
    } catch (error: any) {
      // 실패
    }
  }, [environment, onClose]);

  const onClickModifyEnvironment = useCallback(async () => {
    try {
      await ModifyEnvironment(environment.id, environment);
      onClose();
    } catch (error: any) {
      // 실패
    }
  }, [onClose]);

  return { environment, onChangeEnvironment, onClickCreateEnvironment, onClickModifyEnvironment };
};

export default useEnvironmentModal;
