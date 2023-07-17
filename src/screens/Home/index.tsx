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
  const { actions, states, elements } = useHome();
  return (
    <ScrollView style={homeStyles.container}>
      <AppTitle />
      <View style={{ marginTop: 36, flexDirection: "column", gap: 32 }}>
        {states.isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {elements.gameTags.map(({ id, tagTitle, games }) => (
              <View style={{ flexDirection: "column", gap: 16 }} key={id}>
                <Text
                  style={{ fontSize: 22, fontWeight: "bold", color: "#e5e5e5" }}
                >
                  {tagTitle.toUpperCase()}
                </Text>
                <FlatList
                  data={games}
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
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}
