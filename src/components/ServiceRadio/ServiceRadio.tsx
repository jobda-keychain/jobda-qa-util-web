import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { platform } from 'os';
import { useState } from 'react';
import { EPlatform, EPlatformToNum } from '../../lib/enum/platform';

const ServiceRadio = (): JSX.Element => {
  const [selection, setSelection] = useState(0);

  const onChangeSelection = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelection(Number(e.target.value));

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>서비스</FormLabel>
      <RadioGroup
        row
        aria-label='service'
        name='row-radio-buttons-group'
        value={selection}
        onChange={onChangeSelection}
      >
        {Object.values(EPlatformToNum)
          .map(value => Number(value))
          .filter(value => !isNaN(value))
          .map(value => (
            <FormControlLabel
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
