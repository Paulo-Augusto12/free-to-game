export class GameData {
  constructor(
    readonly id: number = 0,
    readonly title: string = "",
    readonly thumbnail: string = "",
    readonly screenshots: string[] = [],
    readonly shortDescription: string = "",
    readonly description: string = "",
    readonly oficialPageUrl: string = "",
    readonly freeToGamePageUrl: string = ""
  ) {}
}
