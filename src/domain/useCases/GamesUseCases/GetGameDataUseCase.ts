// Repository interface

import { IGetGameDataRepository } from "../../interfaces/repositories/gamesRepository/IGetGameDataRepository";
import { IGetGameDataUseCase } from "./abstractions/IGetGameDataUseCase";
import { GameData } from "./models/GameData";

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
      };
      return new GameData(
        data.id,
        data.title,
        data.thumbnail,
        data.screenshots.map(({ image }) => image),
        data.shortDescription,
        data.description,
        data.oficialPageUrl,
        data.freeToGamePageUrl
      );
    } catch (err) {
      console.log(err);
      throw new Error(JSON.stringify(err));
    }
  }
}
