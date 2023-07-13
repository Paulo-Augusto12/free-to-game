import axios from "axios";
import { IHttpService } from "../../domain/interfaces/http/IHttpService";
import { HttpResponse } from "../../domain/models/http/httpResponse";

export class HttpService implements IHttpService {
  async getData(url: string, body: any, method: "GET" | "POST") {
    switch (method) {
      case "GET": {
        const response = await axios.get(url, body);

        return new HttpResponse(response.data, response.status);
      }
      case "POST": {
        const response = await axios.post(url, body);

        return new HttpResponse(response.data, response.status);
      }
    }
  }
}
