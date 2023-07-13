import React, { useEffect } from "react";
import { AboutGameProps } from "../../routes/stack.routes";

import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";

// Components

import { GameCard } from "../../components/gameCard";

//

// Icons

import { ArrowLeft } from "phosphor-react-native";

//

import { styles } from "./style";
import { useAbout } from "./useAbout";

export function About({ route }: AboutGameProps) {
  const { id, name } = route.params;

  const { actions, states } = useAbout();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          states.setGames([]);
          actions.goBack();
        }}
      >
        <View style={styles.backIcon}>
          <ArrowLeft size={32} color="#E5E5E5" />
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center', borderRadius: 8, width: '100%'}}>

        <Text style={{ color: "white", fontSize: 40 }}>{name}</Text>
        </View>
        {/* {states.games.length ? (
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
                navigateAction={() => {}}
                key={item.id}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator
            size={"large"}
            color="#d7d7"
            style={{ alignSelf: "center" }}
          />
        )} */}
      </View>
    </View>
  );
}
