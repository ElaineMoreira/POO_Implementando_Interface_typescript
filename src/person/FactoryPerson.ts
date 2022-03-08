import { ClientPerson } from "./ClientePerson";
import { DeliveryPerson } from "./DeliveryPerson";
import { NameClassPerson } from "./EnumPerson";
import { OwnerPerson } from "./OwnerPerson";

export class FactoryPerson {
  public static createPerson(type: string): IPerson {
    if (type === NameClassPerson.CLIENT) {
      return new ClientPerson();
    } else if (type === NameClassPerson.DELIVERY) {
      return new DeliveryPerson();
    } else if (type === NameClassPerson.OWNER) {
      return new OwnerPerson();
    }
    /** ou pode tira o IPerson da linha 8 */
    return null as unknown as IPerson;
  }
}
