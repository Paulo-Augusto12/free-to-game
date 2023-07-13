import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";

// Components

import { FilterTags } from "./components";

//

import { homeStyles } from "./style";
import { useHome } from "./useHome";
import { MagnifyingGlass } from "phosphor-react-native";
import { GameCard } from "../../components/gameCard";
import { Props } from "../../types/NavRoutes/Routes";
import { gameTags } from "../../api/apiTags";

export function Home({ navigation }: Props) {
  const hook = useHome();
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.headerContainer}>
        <Text style={homeStyles.headerTitle}>Free Games</Text>
        <Text style={homeStyles.headerDescription}>
          Check out some free games that you might enjoy
        </Text>
      </View>
      <View style={homeStyles.filterContainer}>
        <FilterTags
          gameTags={gameTags}
          onTagPress={(item) => {
            hook.setStatus("");
            hook.setGameGenre(item);
            hook.searchGameByCategory();
          }}
        />
        <View style={homeStyles.searchBarWrapper}>
          <TextInput
            placeholder="Seach for a specific game"
            placeholderTextColor={"#E5E5E5"}
            style={homeStyles.searchBar}
            value={hook.searchFilter}
            onChangeText={hook.setSearchFilter}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#133C95",
              position: "absolute",
              right: 10,
            }}
            onPress={() => hook.searchGame()}
          >
            <MagnifyingGlass size={32} color="#e5e5e5" />
          </TouchableOpacity>
        </View>
      </View>

      {hook.isLoading ? (
        <ActivityIndicator size="large" color="#133C95" />
      ) : (
        <View style={{ marginTop: 10 }}>
          <FlatList
            style={{ maxHeight: 400 }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
            columnWrapperStyle={{ gap: 20 }}
            data={hook.games}
            renderItem={({ item }) => (
              <GameCard
                gamePlataform={item.platform}
                gameTitle={item.title}
                imageSrc={{
                  uri: item.thumbnail,
                }}
                navigateAction={() => {}}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}
