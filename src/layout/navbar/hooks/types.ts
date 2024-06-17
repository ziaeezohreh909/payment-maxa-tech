export interface IUser {
  id: number;
  userName: string;
  email: string;
  password: string;
  role: string;
}

export interface IUserSignInForm {
  email: string;
  password: string;
  remember: boolean;
}

export interface ICart {
  id: number;
  cartProducts: {
    productId: string;
    quantity: number;
    color: string;
  }[];
}

export interface IWishlist {
  id: number;
  wishlistProducts: {
    productId: string;
    quantity: number;
    color: string;
  }[];
}
