import { NameClassPerson } from "./EnumPerson";
import { FactoryPerson } from "./FactoryPerson";

export class UsageFactory {
  public static client() {
    return FactoryPerson.createPerson(NameClassPerson.CLIENT).indentifier();
  }
  public static delivery() {
    return FactoryPerson.createPerson(NameClassPerson.DELIVERY).indentifier();
  }
  public static owner() {
    return FactoryPerson.createPerson(NameClassPerson.OWNER).indentifier();
  }
}
/**imprimir na tela */
console.log(UsageFactory.client());
console.log(UsageFactory.delivery());
console.log(UsageFactory.owner());
