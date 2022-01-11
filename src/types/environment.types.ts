import { EPlatform } from "../lib/enum/platform";

export interface IEnvironment {
    id: number;
    name: string;
    serverDomain: string;
    clientDomain: string;
    platform: EPlatform;
}