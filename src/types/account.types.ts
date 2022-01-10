import { EService } from "../lib/enum/service";

export interface IAccount {
    id: number,
    userId: string,
    password: string,
    platform: string,
    environment: EService
    description: string
}