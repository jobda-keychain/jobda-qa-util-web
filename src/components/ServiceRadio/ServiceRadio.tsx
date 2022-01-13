import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { EPlatform, EPlatformToNum } from '../../lib/enum/platform';

interface ServiceRadioProps {
  platform: number;
  onChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceRadio = ({ platform, onChangePlatform }: ServiceRadioProps): JSX.Element => {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>서비스</FormLabel>
      <RadioGroup
        row
        aria-label='service'
        name='row-radio-buttons-group'
        value={platform}
        onChange={onChangePlatform}
      >
        {Object.values(EPlatformToNum)
          .map(value => Number(value))
          .filter(value => !isNaN(value))
          .map(value => (
            <FormControlLabel
              key={value}
              control={<Radio />}
              value={value}
              label={EPlatform[EPlatformToNum[value] as keyof typeof EPlatform]}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ServiceRadio;
