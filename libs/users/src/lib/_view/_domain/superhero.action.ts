export class ChangeSearchterm {
  static readonly type = '[Superhero] Change Searchterm';
  constructor(public name: string) {}
}

export class Select {
  static readonly type = '[Superhero] select hero';
  constructor(public id: string | undefined) {}
}