// repository interface

import { IGetAllGamesRepository } from "../../interfaces/repositories/gamesRepository/IGetAllGamesRepository";

//

// use case interface

import { IGetAllGamesUseCase } from "./abstractions/IGetAllGamesUseCase";

//

// models

import { Game } from "./models/Game";

//

export class GetAllGamesUseCase implements IGetAllGamesUseCase {
  constructor(private repository: IGetAllGamesRepository) {}

  async execute(): Promise<Game[]> {
    const response = await this.repository.getAllGames();

    return response.Data.map(
      ({ id, title, thumbnail, platform }) =>
        new Game(id, title, thumbnail, platform)
    );
  }
}
