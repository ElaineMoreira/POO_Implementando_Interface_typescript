class ClientPerson implements IPerson {
  name: string;

  constructor() {
    this.name = "";
  }

  indentifier(): string {
    return "Aqui está o ClientPerson";
  }
}
