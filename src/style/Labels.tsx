import styled from 'styled-components';
import { EPlatformToColor, EPlatformToNum } from '../lib/enum/platform';

export const PlatformLabel = styled.div<{ type: EPlatformToNum }>`
  background-color: ${props =>
    EPlatformToColor[EPlatformToNum[props.type] as keyof typeof EPlatformToColor]};
  padding: 5px 10px;
  border-radius: 10px;
`;

export const EnvironmentLabel = styled.div`
  background-color: #ebebed;
  padding: 5px 8px;
`;
