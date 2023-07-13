import { GameData } from "../models/GameData";

export interface IGetGameDataUseCase {
  execute(id: number): Promise<GameData>;
}
