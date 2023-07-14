import React, { useEffect } from "react";
import { AboutGameProps } from "../../routes/stack.routes";

import { View, ActivityIndicator, TouchableOpacity } from "react-native";

// Components

import { GameDataHeader, Links } from "./components";

//

// Icons

import { ArrowLeft } from "phosphor-react-native";

//

import { styles } from "./style";
import { useAbout } from "./useAbout";

export function About({ route }: AboutGameProps) {
  const { id, name } = route.params;

  const { actions, states, selectedGame, elements } = useAbout({ gameId: id });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          actions.goBack();
        }}
      >
        <View style={styles.backIcon}>
          <ArrowLeft size={32} color="#E5E5E5" />
        </View>
      </TouchableOpacity>
      {states.gameRequestLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ alignItems: "center", gap: 48 }}>
          <GameDataHeader
            name={selectedGame.title}
            thumbnail={selectedGame.thumbnail}
            shortDescription={selectedGame.shortDescription}
          />
          <Links links={elements.links} />
        </View>
      )}
    </View>
  );
}
