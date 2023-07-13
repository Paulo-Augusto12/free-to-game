// Services

import { IHttpService } from "../../../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../../../domain/models/http/httpResponse";

//

// Repository interfaces

import { IGetAllGamesRepository } from "../../../domain/interfaces/repositories/gamesRepository/IGetAllGamesRepository";
import { IGetGameDataRepository } from "../../../domain/interfaces/repositories/gamesRepository/IGetGameDataRepository";

//

// DTO's

import { AllGamesDTO } from "../../../domain/dto/AllGamesDTO";
import { GameDataDTO } from "../../../domain/dto/GameDataDTO";

//
export class GamesRepository
  implements IGetAllGamesRepository, IGetGameDataRepository
{
  constructor(private httpService: IHttpService) {}

  async getAllGames(): Promise<HttpResponse<AllGamesDTO[]>> {
    return await this.httpService.getData(
      "https://www.freetogame.com/api/games",
      {},
      "GET"
    );
  }

  async getGameData(id: number): Promise<HttpResponse<GameDataDTO>> {
    return await this.httpService.getData(
      `https://www.freetogame.com/api/game?id=${id}`,
      {},
      "GET"
    );
  }
}
