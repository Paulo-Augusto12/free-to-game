import axios from "axios";

export async function GetGameByGenre(genre: string) {
  try {
    const baseUrl = `https://www.freetogame.com/api/games?category=${genre}`;

    if (genre.trim()) {
      const response = await axios.get(baseUrl);
      console.log(
        "Código de status da rota de requisição por categoria: ",
        response.status
      );
      return response;
    }
  } catch (err) {
    console.log("Erro durante a  requisição por categoria", err);
  }
}
