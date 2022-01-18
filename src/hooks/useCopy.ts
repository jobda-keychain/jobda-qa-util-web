import { useState } from 'react';
import { Account } from '../types/account.types';

const useCopy = (account: Account) => {
  const [format, setFormat] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const copy = async () => {
    let target = format;

    if (!format) {
      target = `환경: ${account.environment} 아이디: ${account.id} 비밀번호: ${account.password} 서비스: ${account.platform}`;
    } else {
      target = target.replace('!(Env)', account.environment);
      target = target.replace('!(Id)', account.userId);
      target = target.replace('!(Pw)', account.password);
      target = target.replace('!(Ser)', account.platform);
    }

    await navigator.clipboard.writeText(target);
  };

  return { format, onChangeFormat, copy };
};

export default useCopy;
