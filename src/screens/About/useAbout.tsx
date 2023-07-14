import React, { useEffect, useState } from "react";
import { IGames } from "../../api/interfaces/IGame";
import { GetGameByGenre } from "../../api/getGameByGenre";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack.routes";
import { GameData } from "../../domain/useCases/GamesUseCases/models/GameData";
import { GAMES_USE_CASES } from "../../di";
import { Linking } from "react-native";

interface IUseAboutProps {
  gameId: number;
}
export function useAbout({ gameId }: IUseAboutProps) {
  const route = useRoute();

  const navigation = useNavigation<StackTypes>();

  const [games, setGames] = useState<IGames[]>([]);

  const [gameRequestLoading, setGameRequestLoading] = useState(false);

  const [game, setGame] = useState<GameData>(new GameData());

  // async function getGames(genre: string) {
  //   if (route.params) {
  //     const response = await GetGameByGenre(genre);
  //     if (response) {
  //       setGames(response.data);
  //     }
  //   }
  // }

  async function getSelectedGameData() {
    setGameRequestLoading(true);
    try {
      const response = await GAMES_USE_CASES.getGameData.execute(gameId);

      setGame(response);
      setGameRequestLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setGameRequestLoading(false);
    }
  }

  async function navigateToBrowserPage(url: string) {
    const supportedUrl = await Linking.canOpenURL(url);

    if (supportedUrl) {
      try {
        await Linking.openURL(url);
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    getSelectedGameData();
  }, [game]);

  return {
    states: {
      games,
      setGames,
      gameRequestLoading,
      // getGames,
    },
    actions: {
      goBack: () => {
        navigation.goBack();
      },
      navigateToBrowserPage
    },
    selectedGame: game,
  };
}
