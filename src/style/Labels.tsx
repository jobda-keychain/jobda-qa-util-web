import styled from "styled-components";
import { EPlatform, EPlatformToColor } from "../lib/enum/platform";


export const PlatformLabel = styled.div<{type: EPlatform}>`
    background-color: ${props => EPlatformToColor[EPlatform[props.type] as keyof typeof EPlatformToColor]};
    padding: 5px 10px;
    border-radius: 10px;
`

export const EnvironmentLabel = styled.div`
    background-color: #EBEBED;
    padding: 5px 8px;
`