import { View, FlatList } from "react-native";

import { useAllGames } from "./useAllgames";
import { GameCard } from "../../components/gameCard";
export function AllGames() {
  const { states } = useAllGames();
  return (
    <FlatList
      style={{
        flex: 1,
        backgroundColor: "#14213D",
        paddingHorizontal: 18,
        gap: 10,
      }}
      data={states.games}
      renderItem={({ item }) => (
        <GameCard
          gamePlataform={item.platform}
          gameTitle={item.title}
          imageSrc={{ uri: item.thumbnail }}
          navigateAction={() => {}}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ padding: 8 }} />}
      numColumns={2}
    />
  );
}
