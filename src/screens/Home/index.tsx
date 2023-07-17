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

export function Home() {
  const { actions, states, elements } = useHome();
  return (
    <FlatList
      style={homeStyles.container}
      ListHeaderComponent={() => <AppTitle />}
      data={elements.gameTags}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: "column",
            gap: 16,
            minHeight: 180,
            marginTop: 36,
          }}
          key={item.id}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#e5e5e5",
            }}
          >
            {item.tagTitle.toUpperCase()}
          </Text>
          <FlatList
            data={item.games}
            renderItem={({ item }) => (
              <>
                {states.isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <GameCard
                    gamePlataform={item.platform.substring(0, 3)}
                    gameTitle={item.title}
                    imageSrc={{
                      uri: item.thumbnail,
                    }}
                    navigateAction={() => {
                      actions.navigate(item.id, item.title);
                    }}
                  />
                )}
              </>
            )}
            horizontal
            ItemSeparatorComponent={() => <View style={{ padding: 8 }} />}
          />
        </View>
      )}
    />
  );
}
