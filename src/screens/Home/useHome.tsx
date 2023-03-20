import { useEffect, useState } from "react";
import { IGames } from "../../api/interfaces/IGame";
import { getAllGames } from "../../api/getGames";
import { GetGameByGenre } from "../../api/getGameByGenre";

export function useHome() {
  const [games, setGames] = useState<IGames[]>([]);
  const [selectedGame, setSelectedGame] = useState<IGames>();
  const [searchFilter, setSearchFilter] = useState("");
  const [gameGenre, setGameGenre] = useState("");
  const [status, setStatus] = useState<string | undefined>("");

  async function getApiGames() {
    const data = await getAllGames();
    if (data) {
      setStatus(data.statusText);
      if (!status?.trim()) {
        setGames(data.data);
      }
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
    const response = await GetGameByGenre(gameGenre);
    if (response) {
      setStatus(response.statusText);
      if (!status?.trim()) {
        setGames(response.data);
      }
    }
  }

  useEffect(() => {
    getApiGames();
    setSelectedGame({} as IGames);
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
  };
}
