import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
interface IGameCardProps {
  imageSrc: ImageSourcePropType;
  gameTitle: string;
  gamePlataform: string;
  navigateAction: () => void;
}
function GameCard({
  imageSrc,
  gameTitle,
  gamePlataform,
  navigateAction,
}: IGameCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigateAction()}>
      <View style={styles.imageWrapper}>
        <Image source={imageSrc} style={{ height: 117 }} />
        <View style={styles.gameInfoWrapper}>
          <Text style={styles.title}>{gameTitle}</Text>
          <Text style={styles.plataform}>Plataforms: {gamePlataform}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(GameCard)