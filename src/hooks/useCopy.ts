import { useEffect, useState } from 'react';
import { getDetail } from '../util/api/Account';

const useCopy = (id: number, onClose: () => void) => {
  const [format, setFormat] = useState('환경: !(Env) 아이디: !(Id) 비밀번호: !(Pw) 서비스: !(Ser)');

  const [errorMessage, setErrorMessage] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  useEffect(() => {
    navigator.permissions.query({ name: 'clipboard-write' as PermissionName }).then(result => {
      if (result.state === 'denied') {
        setErrorMessage('클립보드 권한을 허용해주세요.');
      }
    });
  }, []);

  const doFormat = async () => {
    try {
      const { data } = await getDetail(id);

      if (!format) {
        return `환경: ${data.environment.label} 아이디: ${data.accountId} 비밀번호: ${data.password} 서비스: ${data.platform}`;
      } else {
        return format
          .replace('!(Env)', data.environment.label)
          .replace('!(Id)', data.accountId)
          .replace('!(Pw)', data.password!)
          .replace('!(Ser)', data.platform);
      }
    } catch (error: any) {
      return '';
    }
  };

  const copy = async () => {
    doFormat().then(async value => {
      if (value) {
        await navigator.clipboard.writeText(value);
        onClose();
      }
    });
  };

  return { format, errorMessage, onChangeFormat, copy };
};

export default useCopy;
