import { FlatList, TouchableOpacity, View } from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import GameCard from "../../components/gameCard";
import { useAllGames } from "./useAllgames";
export function AllGames() {
  const { states, actions } = useAllGames();
  return (
    <View
      style={{ flex: 1, backgroundColor: "#14213D", paddingHorizontal: 18 }}
    >
      <TouchableOpacity
        onPress={() => {
          actions.goBack();
        }}
      >
        <View style={{ marginTop: 50 }}>
          <ArrowLeft size={32} color="#E5E5E5" />
        </View>
      </TouchableOpacity>
      <FlatList
        style={{
          flex: 1,
          backgroundColor: "#14213D",
          gap: 10,
          marginTop: 32
        }}
        data={states.games}
        renderItem={({ item }) => (
          <GameCard
            gamePlataform={item.platform}
            gameTitle={item.title}
            imageSrc={{ uri: item.thumbnail }}
            navigateAction={() => {
              actions.navigate(item.id, item.title);
            }}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ padding: 8 }} />}
        numColumns={2}
      />
    </View>
  );
}
