import { AxiosError } from 'axios';

const handleAxiosError = async <T extends (...args: any[]) => any>(
  callback: T,
  errorMessages: { [status: number]: string },
  setErrorMessage?: (message: string) => void,
) => {
  try {
    await callback();
  } catch (error: any) {
    const axiosError = error as AxiosError;

    for (const [status, message] of Object.entries(errorMessages)) {
      if (String(axiosError.response?.status) === status) {
        setErrorMessage?.(message);
        return message;
      }
    }
  }
};

export default handleAxiosError;
