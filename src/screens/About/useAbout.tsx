import React, { useEffect, useState } from "react";
import { IGames } from "../../api/interfaces/IGame";
import { GetGameByGenre } from "../../api/getGameByGenre";
import { useRoute } from "@react-navigation/native";

export function useAbout() {
  const route = useRoute();

  const [games, setGames] = useState<IGames[]>([]);

  async function getGames(genre: string) {
    if (route.params) {
      const response = await GetGameByGenre(genre);
      if (response) {
        setGames(response.data);
      }
    }
  }

  return {
    games,
    setGames,
    getGames,
  };
}
