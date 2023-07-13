import { GameDataDTO } from "../../../dto/GameDataDTO";
import { HttpResponse } from "../../../models/http/httpResponse";

export interface IGetGameDataRepository {
    getGameData(id: number): Promise <HttpResponse<GameDataDTO>>
}