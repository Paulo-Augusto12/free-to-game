import axios from "axios";

export async function getAllGames() {
  try {
    const baseUrl = "https://www.freetogame.com/api/games";

    const response = await axios.get(baseUrl);

    console.log("Código de resposta : ", response.status);
    return response.data;
  } catch (err) {
    console.log("Erro na requisição para todos os jogos : ", err);
  }
}
