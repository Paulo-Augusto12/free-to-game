import { AllGamesDTO } from "../../../dto/AllGamesDTO";
import { HttpResponse } from "../../../models/http/httpResponse";

export interface IGetAllGamesRepository {
  getAllGames(): Promise<HttpResponse<AllGamesDTO[]>>;
}
