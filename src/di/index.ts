import { GamesRepository } from "../data/repositories/gamesRepository/GamesRepository";
import { GetAllGamesUseCase } from "../domain/useCases/GamesUseCases/GetAllGamesUseCase";
import { HttpService } from "../services/http/HttpService";

const HTTP = new HttpService();

const repositories = {
  GAMES: new GamesRepository(HTTP),
};

const GAMES_USE_CASES = {
  getAllGames: new GetAllGamesUseCase(repositories.GAMES),
};


export { GAMES_USE_CASES };
