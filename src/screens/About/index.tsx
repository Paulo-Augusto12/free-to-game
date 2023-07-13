import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { GameCard } from "../../components/gameCard";
import { Props } from "../../types/NavRoutes/Routes";
import { styles } from "./style";
import { useAbout } from "./useAbout";
import { ArrowLeft } from "phosphor-react-native";

export function About({ navigation, route }: Props) {
  const hook = useAbout();

  useEffect(()=>{
    hook.getGames(route.params.gameGenre)
  },[])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          hook.setGames([]);
          navigation.goBack();
        }}
      >
        <View style={styles.backIcon}>
          <ArrowLeft size={32} color="#E5E5E5" />
        </View>
      </TouchableOpacity>
      <View>
        {hook.games.length ? (
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
        )}
      </View>
    </View>
  );
}
