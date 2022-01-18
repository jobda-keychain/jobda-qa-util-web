import styled from 'styled-components';
import { PlatformToColor, Platform } from '../lib/enum/platform';

export const PlatformLabel = styled.div<{ type: Platform }>`
  background-color: ${props =>
    PlatformToColor[Platform[props.type] as keyof typeof PlatformToColor]};
  padding: 5px 10px;
  border-radius: 10px;
`;

export const EnvironmentLabel = styled.div`
  background-color: #ebebed;
  padding: 5px 8px;
`;
