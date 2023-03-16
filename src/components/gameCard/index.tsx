import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
interface IGameCardProps {
  imageSrc: ImageSourcePropType;
  gameTitle: string;
  gamePlataform: string;
}
export function GameCard({
  imageSrc,
  gameTitle,
  gamePlataform,
}: IGameCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
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
