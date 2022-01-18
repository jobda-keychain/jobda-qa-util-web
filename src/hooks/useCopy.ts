import { useState } from 'react';
import { Account } from '../types/account.types';

const useCopy = (account: Account) => {
  const [format, setFormat] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const doFormat = (): string => {
    if (!format) {
      return `환경: ${account.environment} 아이디: ${account.id} 비밀번호: ${account.password} 서비스: ${account.platform}`;
    } else {
      return format
        .replace('!(Env)', account.environment)
        .replace('!(Id)', account.userId)
        .replace('!(Pw)', account.password)
        .replace('!(Ser)', account.platform);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(doFormat());
  };

  return { format, onChangeFormat, copy };
};

export default useCopy;
