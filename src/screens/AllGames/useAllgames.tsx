import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { GAMES_USE_CASES } from "../../di";
import { Game } from "../../domain/useCases/GamesUseCases/models/Game";

export function useAllGames() {
  const navigation = useNavigation()
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
    actions: {
      goBack(){
        navigation.goBack()
      },
      navigate(id: number, name: string){
        navigation.navigate("about", { id, name });
      }
    }
  };
}
