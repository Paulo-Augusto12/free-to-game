import { useEffect, useState } from "react";
import { Game } from "../../domain/useCases/GamesUseCases/models/Game";
import { GAMES_USE_CASES } from "../../di";

export function useAllGames() {
  const [games, setGames] = useState<Game[]>([]);

  const [isListLoading, setIsListLoading] = useState<boolean>();

  async function getGames() {
    try {
      const response = await GAMES_USE_CASES.getAllGames.execute();
      setGames(response);
    } catch (err) {
      console.log(err, "[ ALL GAMES ]");
    }
  }

  useEffect(() => {
    getGames();
  }, []);

  return {
    states: {
      games,
    },
  };
}
