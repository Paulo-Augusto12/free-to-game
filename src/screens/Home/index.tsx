import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Components

import { AppTitle } from "./components";

//

import GameCard from "../../components/gameCard";
import { homeStyles } from "./style";
import { useHome } from "./useHome";

function Home() {
  const { actions, states, elements } = useHome();
  return (
    <FlatList
      style={homeStyles.container}
      ListHeaderComponent={() => (
        <AppTitle backgroundImageSrc="https://www.freetogame.com/assets/images/freetogame-logo.png" />
      )}
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
            ListFooterComponent={() => (
              <>
                {item.games.length ? (
                  <TouchableOpacity
                    style={{
                      width: 152,
                      flex: 1,
                      minHeight: 180,
                      marginBottom: 16,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#142E68",
                      borderRadius: 15,
                      marginLeft: 8,
                    }}
                    onPress={() => {}}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#e5e5e5",
                        fontSize: 18,
                        textAlign: "center",
                      }}
                    >
                      See more {item.tagTitle} games
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <></>
                )}
              </>
            )}
            horizontal
            ItemSeparatorComponent={() => <View style={{ padding: 8 }} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
      ListFooterComponent={() => (
        <TouchableOpacity
          style={{borderWidth: 1, width: '100%', padding: 4, borderRadius: 6, marginBottom: 8, borderColor: '#142E68'}}
          onPress={() => actions.navigateToAllGamesScreen()}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#e5e5e5",
              textAlign: "center",
            }}
          >
            Haven't found a game yet ? Check out here all Games
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

export default React.memo(Home);
