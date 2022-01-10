import { EService } from "../lib/enum/service";

export interface IAccount {
    id: number,
    userId: string,
    password: string,
    platform: EService,
    environment: string
    description: string
}