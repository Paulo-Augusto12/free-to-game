import React, { useEffect, useState } from "react";
import { Linking } from "react-native";

// Navigation

import { StackTypes } from "../../routes/stack.routes";
import { useNavigation } from "@react-navigation/native";

//

// Page related files

import { GameData } from "../../domain/useCases/GamesUseCases/models/GameData";
import { GAMES_USE_CASES } from "../../di";

//

// Icons

import { LinkSimple, UsersThree } from "phosphor-react-native";

//

interface IUseAboutProps {
  gameId: number;
}
export function useAbout({ gameId }: IUseAboutProps) {
  const navigation = useNavigation<StackTypes>();

  const [gameRequestLoading, setGameRequestLoading] = useState(false);

  const [game, setGame] = useState<GameData>(new GameData());

  const gameLinks = [
    {
      text: "You can see the official page of this game here",
      icon: <LinkSimple size={32} color="#E5E5E5" />,
      onPress: () => {
        navigateToBrowserPage(game.oficialPageUrl);
      },
    },
    {
      text: "Check out some other players opinion",
      icon: <UsersThree size={32} color="#E5E5E5" />,
      onPress: () => {
        navigateToBrowserPage(game.freeToGamePageUrl);
      },
    },
  ];

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
  }, []);

  return {
    states: {
      gameRequestLoading,
    },
    actions: {
      goBack: () => {
        navigation.goBack();
      },
      navigateToBrowserPage,
    },
    elements: {
      links: gameLinks,
    },
    selectedGame: game,
  };
}
