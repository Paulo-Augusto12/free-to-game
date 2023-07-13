import { useEffect, useState } from "react";
import { GetGameByGenre } from "../../api/getGameByGenre";
import { Game } from "../../domain/useCases/GamesUseCases/models/Game";
import { GAMES_USE_CASES } from "../../di";

export function useHome() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>();
  const [searchFilter, setSearchFilter] = useState("");
  const [gameGenre, setGameGenre] = useState("");
  const [status, setStatus] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  async function getApiGames() {
    setIsLoading(true);
    try {
      const data = await GAMES_USE_CASES.getAllGames.execute();
      setGames(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function searchGame() {
    const wantedGame = games.filter((game) =>
      game.title.includes(searchFilter)
    );
    if (searchFilter.trim() && wantedGame) {
      setGames(wantedGame);
    } else {
      getApiGames();
    }
  }

  async function searchGameByCategory() {
    setIsLoading(true);
    try {
      const response = await GetGameByGenre(gameGenre);
      if (response) {
        setStatus(response.statusText);
        if (!status?.trim()) {
          setGames(response.data);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getApiGames();
    console.log(selectedGame);
  }, []);

  useEffect(() => {
    if (gameGenre.trim()) {
      searchGameByCategory();
    }
    if (gameGenre.trim() === "all") {
      getApiGames();
    }
  }, [gameGenre]);

  useEffect(() => {
    if (!searchFilter.trim()) {
      searchGame();
    }
  }, [searchFilter]);

  return {
    games,
    setGames,
    searchFilter,
    setSearchFilter,
    searchGame,
    searchGameByCategory,
    setGameGenre,
    status,
    setStatus,
    selectedGame,
    setSelectedGame,
    isLoading,
  };
}
