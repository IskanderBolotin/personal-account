import { ProductDto } from "./dto";
import { SortEnum } from "./sort";

export type SortActions = { type?: SortEnum } | { type?: "RESET"; payload: ProductDto[] };

export type SortReducerState = {
  sort?: SortEnum;
  products: ProductDto[];
};

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
  switch (action.type) {
    case SortEnum.RAITING_ASC: {
      return {
        sort: SortEnum.RAITING_ASC,
        products: [...state.products].sort((a, b) =>
          a.initialRaiting > b.initialRaiting ? 1 : -1,
        ),
      };
    }
    case SortEnum.RAITING_DESC: {
      return {
        sort: SortEnum.RAITING_DESC,
        products: [...state.products].sort((a, b) =>
          a.initialRaiting > b.initialRaiting ? -1 : 1,
        ),
      };
    }
    case SortEnum.PRICE_ASC: {
      return {
        sort: SortEnum.PRICE_ASC,
        products: [...state.products].sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    }
    case SortEnum.PRICE_DESC: {
      return {
        sort: SortEnum.PRICE_DESC,
        products: [...state.products].sort((a, b) => (a.price > b.price ? -1 : 1)),
      };
    }
    case "RESET": {
      return {
        products: action.payload,
      };
    }
    default: {
      return {
        products: state.products,
      };
    }
  }
};
