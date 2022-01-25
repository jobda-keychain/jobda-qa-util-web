import { useState } from 'react';
import { getDetail } from '../util/api/Account';

const useCopy = (id: number) => {
  const [format, setFormat] = useState('환경: !(Env) 아이디: !(Id) 비밀번호: !(Pw) 서비스: !(Ser)');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onChangeFormat = (e: React.ChangeEvent<HTMLInputElement>) => setFormat(e.target.value);

  const fetchDetail = async () => {
    const { data } = await getDetail(id);
    return data;
  };

  const doFormat = async () => {
    try {
      const data = await fetchDetail();

      return format
        .replace('!(Env)', data.environment.label)
        .replace('!(Id)', data.accountId)
        .replace('!(Pw)', data.password!)
        .replace('!(Ser)', data.platform);
    } catch (error: any) {
      return '';
    }
  };

  const copy = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigator.permissions
      .query({ name: 'clipboard-write' as PermissionName })
      .then(async result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          const formattedMessage = await doFormat();

          navigator.clipboard.writeText(formattedMessage).then(() => {
            setSuccessMessage('복사 성공!');
          });
        } else {
          setErrorMessage('클립보드 권한을 허용해주세요.');
        }
      });
  };

  return { format, successMessage, errorMessage, onChangeFormat, copy };
};

export default useCopy;
