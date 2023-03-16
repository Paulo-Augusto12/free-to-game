import { useEffect, useState } from "react";
import { IGames } from "../../api/interfaces/IGame";
import { getAllGames } from "../../api/getGames";
import { GetGameByGenre } from "../../api/getGameByGenre";

export function useHome() {
  const [games, setGames] = useState<IGames[]>([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [gameGenre, setGameGenre] = useState("");
  const [status, setStatus] = useState<string | undefined>("");
  const gameTags = [
    {
      tagTitle: "all",
      id: 1,
    },
    {
      tagTitle: "mmorpg",
      id: 2,
    },
    {
      tagTitle: "shooter",
      id: 3,
    },
    {
      tagTitle: "strategy",
      id: 4,
    },
    {
      tagTitle: "moba",
      id: 5,
    },
    {
      tagTitle: "racing",
      id: 6,
    },
    {
      tagTitle: "sports",
      id: 7,
    },
    {
      tagTitle: "social",
      id: 8,
    },
    {
      tagTitle: "sandbox",
      id: 9,
    },
    {
      tagTitle: "open-world",
      id: 10,
    },
    {
      tagTitle: "survival",
      id: 11,
    },
    {
      tagTitle: "pvp",
      id: 12,
    },
    {
      tagTitle: "pve",
      id: 13,
    },
    {
      tagTitle: "pixel",
      id: 14,
    },
    {
      tagTitle: "voxel",
      id: 15,
    },
    {
      tagTitle: "zombie",
      id: 16,
    },
    {
      tagTitle: "turn-based",
      id: 17,
    },
    {
      tagTitle: "first-person",
      id: 18,
    },
    {
      tagTitle: "third-person",
      id: 19,
    },
    {
      tagTitle: "top-down",
      id: 20,
    },
    {
      tagTitle: "tank",
      id: 21,
    },
    {
      tagTitle: "space",
      id: 22,
    },

    {
      tagTitle: "sailing",
      id: 23,
    },
    {
      tagTitle: "side-scroller",
      id: 24,
    },
    {
      tagTitle: "permadeath",
      id: 25,
    },
    {
      tagTitle: "card",
      id: 26,
    },
    {
      tagTitle: "battle-royale",
      id: 27,
    },
    {
      tagTitle: "mmo",
      id: 28,
    },
    {
      tagTitle: "mmofps",
      id: 29,
    },
    {
      tagTitle: "mmotps",
      id: 30,
    },
    {
      tagTitle: "3d",
      id: 31,
    },
    {
      tagTitle: "2d",
      id: 32,
    },
    {
      tagTitle: "anime",
      id: 33,
    },
    {
      tagTitle: "fantasy",
      id: 34,
    },
    {
      tagTitle: "sci-fi",
      id: 35,
    },
    {
      tagTitle: "fighting",
      id: 36,
    },
    {
      tagTitle: "action-rpg",
      id: 37,
    },
    {
      tagTitle: "action",
      id: 38,
    },
    {
      tagTitle: "military",
      id: 39,
    },
    {
      tagTitle: "martial-arts",
      id: 40,
    },
    {
      tagTitle: "flight",
      id: 41,
    },
    {
      tagTitle: "low-spec",
      id: 42,
    },
    {
      tagTitle: "tower-defense",
      id: 43,
    },
    {
      tagTitle: "horror",
      id: 44,
    },
    {
      tagTitle: "mmorts",
      id: 45,
    },
  ];

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
    gameTags,
    games,
    setGames,
    searchFilter,
    setSearchFilter,
    searchGame,
    searchGameByCategory,
    setGameGenre,
    status,
    setStatus,
  };
}
