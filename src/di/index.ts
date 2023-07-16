import { GamesRepository } from "../data/repositories/gamesRepository/GamesRepository";
import { GetAllGamesUseCase } from "../domain/useCases/GamesUseCases/GetAllGamesUseCase";
import { GetGameDataUseCase } from "../domain/useCases/GamesUseCases/GetGameDataUseCase";
import { GetGamesByGenreUseCase } from "../domain/useCases/GamesUseCases/GetGamesByGenreUseCase";
import { HttpService } from "../services/http/HttpService";

const HTTP = new HttpService();

const repositories = {
  GAMES: new GamesRepository(HTTP),
};

const GAMES_USE_CASES = {
  getAllGames: new GetAllGamesUseCase(repositories.GAMES),
  getGameData: new GetGameDataUseCase(repositories.GAMES),
  getGamesByGenre: new GetGamesByGenreUseCase(repositories.GAMES),
};

export { GAMES_USE_CASES };
