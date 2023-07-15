// Repository interface

import { IGetGameDataRepository } from "../../interfaces/repositories/gamesRepository/IGetGameDataRepository";
import { IGetGameDataUseCase } from "./abstractions/IGetGameDataUseCase";
import { GameData, GameDetails, MinimumRequirements } from "./models/GameData";

//

export class GetGameDataUseCase implements IGetGameDataUseCase {
  constructor(private repository: IGetGameDataRepository) {}

  checkIfDataIsKnown(data: string): string {
    if (!data.trim().length || data.trim() === "?" || data === undefined) {
      return `${"We couldn`t find this data, check out the oficial page for more details"}`;
    }
    return data;
  }

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
          this.checkIfDataIsKnown(data.details.developer),
          this.checkIfDataIsKnown(data.details.publisher),
          data.details.releasedAt.replace(
            /^(\d{4})-(\d{2})-(\d{2})$/,
            "$3/$2/$1"
          )
        ),
        new MinimumRequirements(
          this.checkIfDataIsKnown(data.minrequirements.os),
          this.checkIfDataIsKnown(data.minrequirements.processor),
          this.checkIfDataIsKnown(data.minrequirements.memory),
          this.checkIfDataIsKnown(data.minrequirements.storage),
          this.checkIfDataIsKnown(data.minrequirements.graphics)
        )
      );
    } catch (err) {
      console.log(err);
      throw new Error(JSON.stringify(err));
    }
  }
}
