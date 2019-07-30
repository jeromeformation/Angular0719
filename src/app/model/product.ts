export class Product {
  // tslint:disable-next-line:variable-name
  constructor(private _name?: string, private _description?: string) {
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}

/**
 * Données de tests (à remplacer par l'appel de l'API ASAP)
 */
export const CONST_PRODUCTS = [
  new Product('Hamac', 'Pour se reposer'),
  new Product('Parasol', 'Pour se mettre à l\'ombre'),
  new Product('Ballon', 'Pour jouer au volley')
];
