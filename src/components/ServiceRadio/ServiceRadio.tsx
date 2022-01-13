import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { EPlatform } from '../../lib/enum/platform';

interface ServiceRadioProps {
  platform: EPlatform;
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
        {Object.values(EPlatform).map(value => (
          <FormControlLabel key={value} control={<Radio />} value={value} label={value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ServiceRadio;
