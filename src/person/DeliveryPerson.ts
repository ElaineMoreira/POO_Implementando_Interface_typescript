export class DeliveryPerson implements IPerson {
  public name: string;

  constructor() {
    this.name = "";
  }

  public indentifier(): string {
    return "Aqui está o DeliveryPerson";
  }
}
