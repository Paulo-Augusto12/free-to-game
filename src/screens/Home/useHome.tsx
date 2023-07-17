import { useEffect, useState } from "react";
import { GetGameByGenre } from "../../api/getGameByGenre";
import { Game } from "../../domain/useCases/GamesUseCases/models/Game";
import { GAMES_USE_CASES } from "../../di";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack.routes";

export function useHome() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>();
  const [status, setStatus] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const [mmoRpgGames, setMmoRpgGames] = useState<Game[]>([]);
  const [shooterGames, setShooterGames] = useState<Game[]>([]);
  const [strategyGames, setStrategyGames] = useState<Game[]>([]);
  const [mobaGames, setMobaGames] = useState<Game[]>([]);
  const [openWorldGames, setOpenWorldGames] = useState<Game[]>([]);
  const [survivalGames, setSurvivalgames] = useState<Game[]>([]);
  const [pvpGames, setPvpGames] = useState<Game[]>([]);
  const [zombieGames, setZombieGames] = useState<Game[]>([]);
  const [firstPersonGames, setFirstPersonGames] = useState<Game[]>([]);
  const [thirdPersonGames, setThirdPersonGames] = useState<Game[]>([]);
  const [battleRoyaleGames, setBattleRoyaleGame] = useState<Game[]>([]);
  const [mmoGames, setMmoGames] = useState<Game[]>([]);
  const [animeGames, setAnimeGames] = useState<Game[]>([]);
  const [fantasyGames, setFantasyGames] = useState<Game[]>([]);
  const [fightingGames, setFigthingGames] = useState<Game[]>([]);
  const [actionGames, setActionGames] = useState<Game[]>([]);
  const [lowSpecGames, setLowSpecGames] = useState<Game[]>([]);

  const navigation = useNavigation<StackTypes>();

  const gameTags = [
    {
      tagTitle: "mmorpg",
      id: 2,
      games: mmoRpgGames,
    },
    {
      tagTitle: "shooter",
      id: 3,
      games: shooterGames,
    },
    {
      tagTitle: "strategy",
      id: 4,
      games: strategyGames,
    },
    {
      tagTitle: "moba",
      id: 5,
      games: mobaGames,
    },
    {
      tagTitle: "open-world",
      id: 10,
      games: openWorldGames,
    },
    {
      tagTitle: "survival",
      id: 11,
      games: survivalGames,
    },
    {
      tagTitle: "pvp",
      id: 12,
      games: pvpGames,
    },
    {
      tagTitle: "zombie",
      id: 16,
      games: zombieGames,
    },
    {
      tagTitle: "first-person",
      id: 18,
      games: firstPersonGames,
    },
    {
      tagTitle: "third-person",
      id: 19,
      games: thirdPersonGames,
    },
    {
      tagTitle: "battle-royale",
      id: 27,
      games: battleRoyaleGames,
    },
    {
      tagTitle: "mmo",
      id: 28,
      games: mmoGames,
    },
    {
      tagTitle: "anime",
      id: 33,
      games: animeGames,
    },
    {
      tagTitle: "fantasy",
      id: 34,
      games: fantasyGames,
    },
    {
      tagTitle: "fighting",
      id: 36,
      games: fightingGames,
    },
    {
      tagTitle: "action",
      id: 38,
      games: actionGames,
    },
    {
      tagTitle: "low-spec",
      id: 42,
      games: lowSpecGames,
    },
  ];

  async function getGamesBasedOnGenre(
    genre: string,
    setGameState: (value: React.SetStateAction<Game[]>) => void
  ) {
    setIsLoading(true);
    try {
      const response = await GAMES_USE_CASES.getGamesByGenre.execute(genre);

      setGameState(response);
    } catch (err) {
      console.log(err, "ui");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const x = gameTags.map((tag) => tag.games);

    if (!x.some((x) => x.length)) {
      Promise.all([
        getGamesBasedOnGenre("mmorpg", setMmoRpgGames),
        getGamesBasedOnGenre("shooter", setShooterGames),
        getGamesBasedOnGenre("strategy", setStrategyGames),
        getGamesBasedOnGenre("moba", setMobaGames),
        getGamesBasedOnGenre("open-world", setOpenWorldGames),
        getGamesBasedOnGenre("survival", setSurvivalgames),
        getGamesBasedOnGenre("pvp", setPvpGames),
        getGamesBasedOnGenre("zombie", setZombieGames),
        getGamesBasedOnGenre("first-person", setFirstPersonGames),
        getGamesBasedOnGenre("third-person", setThirdPersonGames),
        getGamesBasedOnGenre("battle-royale", setBattleRoyaleGame),
        getGamesBasedOnGenre("mmo", setMmoGames),
        getGamesBasedOnGenre("anime", setAnimeGames),
        getGamesBasedOnGenre("fantasy", setFantasyGames),
        getGamesBasedOnGenre("fighting", setFigthingGames),
        getGamesBasedOnGenre("action", setActionGames),
        getGamesBasedOnGenre("low-spec", setLowSpecGames),
      ]);
    }
  }, []);

  return {
    states: {
      games,
      setGames,
      status,
      setStatus,
      selectedGame,
      setSelectedGame,
      isLoading,
    },
    actions: {
      navigate: (id: number, name: string) => {
        navigation.navigate("about", { id, name });
      },
      navigateToAllGamesScreen: () => {
        navigation.navigate("allGames");
      },
    },
    elements: {
      gameTags,
    },
  };
}
