// Repository interface

import { IGetGameDataRepository } from "../../interfaces/repositories/gamesRepository/IGetGameDataRepository";
import { IGetGameDataUseCase } from "./abstractions/IGetGameDataUseCase";
import { GameData, GameDetails, MinimumRequirements } from "./models/GameData";

//

export class GetGameDataUseCase implements IGetGameDataUseCase {
  constructor(private repository: IGetGameDataRepository) {}

  async execute(id: number): Promise<GameData> {
    try {
      const response = await this.repository.getGameData(id);

      const data = {
        id: response.Data.id,
        title: response.Data.title,
        thumbnail: response.Data.thumbnail,
        screenshots: response.Data.screenshots,
        shortDescription: response.Data.short_description,
        description: response.Data.description,
        oficialPageUrl: response.Data.game_url,
        freeToGamePageUrl: response.Data.freetogame_profile_url,
        details: {
          developer: response.Data.developer,
          publisher: response.Data.publisher,
          releasedAt: response.Data.release_date,
        },
        minrequirements: response.Data.minimum_system_requirements,
      };
      return new GameData(
        data.id,
        data.title,
        data.thumbnail,
        data.screenshots.map(({ image }) => image),
        data.shortDescription,
        data.description,
        data.oficialPageUrl,
        data.freeToGamePageUrl,
        new GameDetails(
          data.details.developer,
          data.details.publisher,
          data.details.releasedAt
        ),
        new MinimumRequirements(
          data.minrequirements.os,
          data.minrequirements.processor,
          data.minrequirements.memory,
          data.minrequirements.storage,
          data.minrequirements.graphics
        )
      );
    } catch (err) {
      console.log(err);
      throw new Error(JSON.stringify(err));
    }
  }
}
