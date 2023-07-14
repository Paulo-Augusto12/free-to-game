import React, { useEffect } from "react";
import { AboutGameProps } from "../../routes/stack.routes";

import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

// Components

import { GameCard } from "../../components/gameCard";
import { ExternalLinkCard, Links } from "./components";

//

// Icons

import { ArrowLeft, LinkSimple, UsersThree } from "phosphor-react-native";

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
          <View
            style={{
              alignItems: "center",
              borderRadius: 8,
              width: "100%",
              height: 250,
            }}
          >
            <Image
              source={{ uri: selectedGame.thumbnail }}
              style={{
                width: "100%",
                height: 250,
                opacity: 0.5,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                position: "absolute",
                bottom: 60,
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                }}
              >
                {selectedGame.shortDescription}
              </Text>
            </View>
          </View>
          <Links links={elements.links} />
        </View>
      )}
    </View>
  );
}
