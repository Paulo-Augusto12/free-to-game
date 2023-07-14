import React, { useEffect } from "react";
import { AboutGameProps } from "../../routes/stack.routes";

import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from "react-native";

// Components

import { GameDataHeader, Links, Screenshots, GameDetails } from "./components";

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
        <ScrollView
          contentContainerStyle={{ alignItems: "center", gap: 18 }}
          style={{ marginBottom: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <GameDataHeader
            name={selectedGame.title}
            thumbnail={selectedGame.thumbnail}
            shortDescription={selectedGame.shortDescription}
            longDescription={selectedGame.description}
          />

          <Screenshots screenshots={selectedGame.screenshots} />

          <Links links={elements.links} />

          <Text
            style={{
              color: "#FFFF",
              marginTop: 6,
              fontSize: 16,
              width: "100%",
            }}
          >
            {selectedGame.description}
          </Text>

          <GameDetails
            details={selectedGame.details}
            minimunRequirements={selectedGame.minimunrequirements}
          />
        </ScrollView>
      )}
    </View>
  );
}
