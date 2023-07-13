import { useEffect, useState } from "react";
import { GetGameByGenre } from "../../api/getGameByGenre";
import { Game } from "../../domain/useCases/GamesUseCases/models/Game";
import { GAMES_USE_CASES } from "../../di";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack.routes";

export function useHome() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>();
  const [searchFilter, setSearchFilter] = useState("");
  const [gameGenre, setGameGenre] = useState("");
  const [status, setStatus] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<StackTypes>();

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
    states: {
      games,
      setGames,
      searchFilter,
      setSearchFilter,
      setGameGenre,
      status,
      setStatus,
      selectedGame,
      setSelectedGame,
      isLoading,
    },
    actions: {
      searchGame,
      searchGameByCategory,
      navigate: (id: number, name: string) => {
        navigation.navigate("about", { id, name });
      },
    },
  };
}
