import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useMemo } from 'react';
import { EPlatform, EPlatformToNum } from '../../../lib/enum/platform';

interface ServiceRadioProps {
  disabled: boolean;
  platform: EPlatform;
  onChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceRadio = ({ disabled, platform, onChangePlatform }: ServiceRadioProps): JSX.Element => {
  const radioControls = useMemo(
    () =>
      Object.values(EPlatformToNum)
        .map(value => Number(value))
        .filter(value => !isNaN(value))
        .map(value => (
          <FormControlLabel
            key={value}
            control={<Radio />}
            value={EPlatformToNum[value]}
            label={EPlatform[EPlatformToNum[value] as keyof typeof EPlatform]}
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
