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
    this.name = name;
    this.description = description;
    this.id = id;
  }

  public get name() {
    return this._name;
  }

  public set name(value: string) {
    if (value) {
      this._name = value;
      this.slug = slug(this._name, {lower: true});
    }
  }
}

/**
 * Données de tests (à remplacer par l'appel de l'API ASAP)
 */
export const CONST_PRODUCTS: Product[] = [
  new Product('Hamac', 'Pour se reposer', 1),
  new Product('Parasol', 'Pour se mettre à l\'ombre', 2),
  new Product('Ballon', 'Pour jouer au volley', 3)
];
