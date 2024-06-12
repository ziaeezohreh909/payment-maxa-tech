export type InputsType = {
  username: string;
  email: string;
  password: string;
};

export type UserDataType = InputsType & {
  id: number;
  cart: ChosenItemDataType[];
  wishlist: ChosenItemDataType[];
  role: string;
  isLoggedIn: boolean;
};

export type ChosenItemDataType = {
  itemId: string;
  quantity: number;
  color: string;
};
