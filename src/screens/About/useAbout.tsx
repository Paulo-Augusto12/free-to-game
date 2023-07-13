import React, { useEffect, useState } from "react";
import { IGames } from "../../api/interfaces/IGame";
import { GetGameByGenre } from "../../api/getGameByGenre";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack.routes";

export function useAbout() {
  const route = useRoute();

  const navigation = useNavigation<StackTypes>();

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
    states: {
      games,
      setGames,
      getGames,
    },
    actions: {
      goBack: () => {
        navigation.goBack();
      },
    },
  };
}
