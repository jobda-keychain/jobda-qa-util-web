import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useMemo } from 'react';
import { Platform, PlatformToNum } from '../../../lib/enum/platform';

interface ServiceRadioProps {
  disabled: boolean;
  platform: Platform;
  onChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceRadio = ({ disabled, platform, onChangePlatform }: ServiceRadioProps): JSX.Element => {
  const radioControls = useMemo(
    () =>
      Object.values(PlatformToNum)
        .map(value => Number(value))
        .filter(value => !isNaN(value))
        .map(value => (
          <FormControlLabel
            key={value}
            control={<Radio />}
            value={PlatformToNum[value]}
            label={Platform[PlatformToNum[value] as keyof typeof Platform]}
          />
        )),
    [],
  );

  return (
    <FormControl component='fieldset' disabled={disabled}>
      <FormLabel component='legend'>서비스</FormLabel>
      <RadioGroup row name='platform' value={platform} onChange={onChangePlatform}>
        {radioControls}
      </RadioGroup>
    </FormControl>
  );
};

export default ServiceRadio;
