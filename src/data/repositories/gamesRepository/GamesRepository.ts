// Services

import { AllGamesDTO } from "../../../domain/dto/AllGamesDTO";
import { IHttpService } from "../../../domain/interfaces/http/IHttpService";
import { IGetAllGamesRepository } from "../../../domain/interfaces/repositories/gamesRepository/IGetAllGamesRepository";
import { HttpResponse } from "../../../domain/models/http/httpResponse";

//

export class GamesRepository implements IGetAllGamesRepository {
  constructor(private httpService: IHttpService) {}

  async getAllGames(): Promise<HttpResponse<AllGamesDTO[]>> {
    return await this.httpService.getData(
      "https://www.freetogame.com/api/games",
      {},
      "GET"
    );
  }
}
