// Use case interface

import { IGetGamesByGenreUseCase } from "./abstractions/IGetGamesByGenreUseCase";

//

// Repository interface

import { IGetGamesByGenreRepository } from "../../interfaces/repositories/gamesRepository/IGetGamesByGenreRepository";

//

// Model

import { Game } from "./models/Game";

//

export class GetGamesByGenreUseCase implements IGetGamesByGenreUseCase {
  constructor(private repository: IGetGamesByGenreRepository) {}
  async execute(genre: string): Promise<Game[]> {
    try {
      const response = await this.repository.getGamesByGenre(genre);

      const data = response.Data;

      return data.map(
        ({ id, title, thumbnail, platform }) =>
          new Game(id, title, thumbnail, platform)
      );
    } catch (err) {
      console.log(err);
      throw new Error(JSON.stringify(err));
    }
  }
}
