import { useState } from 'react';
import { getDetail } from '../util/api/Account';

const useCopy = (id: number, onClose: () => void) => {
  const [format, setFormat] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const doFormat = async () => {
    try {
      const { data } = await getDetail(id);

      if (!format) {
        return `환경: ${data.environment} 아이디: ${data.userId} 비밀번호: ${data.password} 서비스: ${data.platform}`;
      } else {
        return format
          .replace('!(Env)', data.environment)
          .replace('!(Id)', data.userId)
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

  return { format, onChangeFormat, copy };
};

export default useCopy;
