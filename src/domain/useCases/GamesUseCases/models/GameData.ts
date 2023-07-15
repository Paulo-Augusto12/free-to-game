export class GameDetails {
  constructor(
    readonly developer: string = "",
    readonly publisher: string = "",
    readonly releasedAt: string = ""
  ) {}
}

export class MinimumRequirements {
  constructor(
    readonly system: string = "",
    readonly processor: string = "",
    readonly memory: string = "",
    readonly storage: string = "",
    readonly graphics: string = ""
  ) {}
}

export class GameData {
  constructor(
    readonly id: number = 0,
    readonly title: string = "",
    readonly thumbnail: string = "",
    readonly screenshots: string[] = [],
    readonly shortDescription: string = "",
    readonly description: string = "",
    readonly oficialPageUrl: string = "",
    readonly freeToGamePageUrl: string = "",
    readonly details: GameDetails = new GameDetails(),
    readonly minimunrequirements: MinimumRequirements = new MinimumRequirements()
  ) {}
}
