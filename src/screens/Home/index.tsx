import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";

// Components

import { FilterTags, SearchBar, AppTitle } from "./components";

//

import { homeStyles } from "./style";
import { useHome } from "./useHome";
import { GameCard } from "../../components/gameCard";
import { gameTags } from "../../api/apiTags";

export function Home() {
  const { actions, states } = useHome();
  return (
    <ScrollView style={homeStyles.container}>
      <AppTitle />
      {/* <View style={homeStyles.filterContainer}>
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
      </View> */}
    </ScrollView>
  );
}
