import React from "react";
import { View, Text } from "react-native";
import { GameCard } from "../../components/gameCard";
import { Props } from "../../types/NavRoutes/Routes";
import type { RouteProp } from "@react-navigation/native";

export function About({ navigation, route }: Props) {
  return (
    <View>
      <Text>Hello World</Text>
      <Text>{route.params.gameGenre}</Text>
    </View>
  );
}
