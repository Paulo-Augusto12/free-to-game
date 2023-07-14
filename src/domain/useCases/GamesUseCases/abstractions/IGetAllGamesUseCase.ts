import { Game } from "../models/Game";

export interface IGetAllGamesUseCase {
  execute(): Promise<Game[]>;
}
