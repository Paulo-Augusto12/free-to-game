import { HttpResponse } from "../../models/http/httpResponse";

export interface IHttpService {
  getData: <T = any>(
    url: string,
    body: any,
    method: "GET" | "POST"
  ) => Promise<HttpResponse<T>>;
}
