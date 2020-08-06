export interface IUser {
  userID?: number;
  fullName: string;
}

export interface IProduct {
  brand: string;
  discount: number;
  id: string;
  image: string;
  rating: number;
  title: string;
  price: IPrice;
  colour: IColour;
}

interface IPrice {
  final_price: number;
}

interface IColour {
  color: string;
  title: string;
}
