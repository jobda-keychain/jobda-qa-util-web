import { useCallback, useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Environment } from '../types/environment.types';
import { createEnvironment, modifyEnvironment } from '../util/api/environment';

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
      await createEnvironment(environment);
      onClose();
    } catch (error: any) {
      // 실패
    }
  }, [environment, onClose]);

  const onClickModifyEnvironment = useCallback(async () => {
    try {
      await modifyEnvironment(environment.id, environment);
      onClose();
    } catch (error: any) {
      // 실패
    }
  }, [environment, onClose]);

  return { environment, onChangeEnvironment, onClickCreateEnvironment, onClickModifyEnvironment };
};

export default useEnvironmentModal;
