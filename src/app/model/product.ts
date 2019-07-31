import * as slug from 'slug';

export class Product {

  public id: number;
  private _name: string;
  public slug: string;
  public description: string;
  public price: number;
  public createdAt: Date;
  public updatedAt: Date;
  public nbViews: number;
  public isPublished: boolean;
  public imageName: string;

  constructor(name?: string, description?: string, id?: number) {
    this._name = name;
    this.description = description;
    this.id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    this.slug = slug(value);
  }
}

/**
 * Données de tests (à remplacer par l'appel de l'API ASAP)
 */
export const CONST_PRODUCTS = [
  new Product('Hamac', 'Pour se reposer', 1),
  new Product('Parasol', 'Pour se mettre à l\'ombre', 2),
  new Product('Ballon', 'Pour jouer au volley', 3)
];
