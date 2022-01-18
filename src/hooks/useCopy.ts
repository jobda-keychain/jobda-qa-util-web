import { useState } from 'react';
import { Platform } from '../lib/enum/platform';
import { Account } from '../types/account.types';

const useCopy = (account: Account) => {
  const [format, setFormat] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const getAccount = (): Account => {
    // todo: 상세 보기 요청
    return {
      id: 0,
      userId: '',
      password: '',
      platform: Platform.JOBDA,
      environment: '',
      description: '',
    };
  };

  const doFormat = (): string => {
    if (!format) {
      return `환경: ${account.environment} 아이디: ${account.id} 비밀번호: ${account.password} 서비스: ${account.platform}`;
    } else {
      const detailAccount = getAccount();
      return format
        .replace('!(Env)', detailAccount.environment)
        .replace('!(Id)', detailAccount.userId)
        .replace('!(Pw)', detailAccount.password!)
        .replace('!(Ser)', detailAccount.platform);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(doFormat());
  };

  return { format, onChangeFormat, copy };
};

export default useCopy;
