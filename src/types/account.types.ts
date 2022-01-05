import { EService } from "../lib/enum/service";
import { EStage } from "../lib/enum/stage";

export interface IAccount {
    id: string,
    pw: string,
    stage: EStage,
    des: string,
    service: EService
}