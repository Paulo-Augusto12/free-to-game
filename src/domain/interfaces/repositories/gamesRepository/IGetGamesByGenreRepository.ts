import { GamesByGenreDTO } from "../../../dto/GamesByGenreDTO";
import { HttpResponse } from "../../../models/http/httpResponse";

export interface IGetGamesByGenreRepository {
  getGamesByGenre(genre: string): Promise<HttpResponse<GamesByGenreDTO[]>>;
}
