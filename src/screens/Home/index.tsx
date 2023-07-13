import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

// Components

import { FilterTags, SearchBar } from "./components";

//

import { homeStyles } from "./style";
import { useHome } from "./useHome";
import { GameCard } from "../../components/gameCard";
import { gameTags } from "../../api/apiTags";

export function Home() {
  const { actions, states } = useHome();
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
            states.setStatus("");
            states.setGameGenre(item);
            actions.searchGameByCategory();
          }}
        />
        <SearchBar
          searchValue={states.searchFilter}
          onChangeText={states.setSearchFilter}
          onSearchIconPress={() => actions.searchGame()}
        />
      </View>

      {states.isLoading ? (
        <ActivityIndicator size="large" color="#133C95" />
      ) : (
        <View style={{ marginTop: 10 }}>
          <FlatList
            style={{ maxHeight: 400 }}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
            columnWrapperStyle={{ gap: 20 }}
            data={states.games}
            renderItem={({ item }) => (
              <GameCard
                gamePlataform={item.platform}
                gameTitle={item.title}
                imageSrc={{
                  uri: item.thumbnail,
                }}
                navigateAction={() => {
                  actions.navigate(item.id, item.title);
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}
