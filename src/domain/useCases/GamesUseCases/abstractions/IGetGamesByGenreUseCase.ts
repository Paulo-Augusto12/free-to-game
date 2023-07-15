import { Game } from "../models/Game";

export interface IGetGamesByGenreUseCase {
    execute(genre: string): Promise <Game[]>
}