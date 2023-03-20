import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IGames } from "../../api/interfaces/IGame";

export type RootStackParamList = {
  home: undefined;
  about: {
    selectedGame: IGames;
    gameGenre: string;

    // relatedGames: IGames[];
  };
};

export type Props = NativeStackScreenProps<RootStackParamList, "about">;

export type HomeProps = Props["navigation"];
export type ProfileScreenRouteProp = Props["route"];
