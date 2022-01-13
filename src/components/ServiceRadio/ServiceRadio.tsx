import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useMemo } from 'react';
import { EPlatform, EPlatformToNum } from '../../lib/enum/platform';

interface ServiceRadioProps {
  platform: EPlatform;
  onChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceRadio = ({ platform, onChangePlatform }: ServiceRadioProps): JSX.Element => {
  const platformControls = useMemo(
    () =>
      Object.values(EPlatformToNum)
        .map(value => Number(value))
        .filter(value => !isNaN(value))
        .map(value => {
          const platform = EPlatform[EPlatformToNum[value] as keyof typeof EPlatform];
          return (
            <FormControlLabel key={value} control={<Radio />} value={platform} label={platform} />
          );
        }),
    [],
  );

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>서비스</FormLabel>
      <RadioGroup row name='platform' value={platform} onChange={onChangePlatform}>
        {platformControls}
      </RadioGroup>
    </FormControl>
  );
};

export default ServiceRadio;
