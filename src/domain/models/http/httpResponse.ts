export class HttpResponse<T = any> {
  constructor(readonly Data: T, readonly Status: number) {}
}
