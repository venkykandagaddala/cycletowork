export class Product{
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public discountPercentage: number;
  public rating: number;
  public stock: number;
  public brand: string;
  public category: string;
  public thumbnail: string;
  public images: [];

  constructor(id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [],
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.images = images
  }
}

