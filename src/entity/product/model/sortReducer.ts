import { ProductDto } from "./dto";
import { SortEnum } from "./sort";

export type SortActions = { type?: SortEnum };

export type SortReducerState = {
  sort?: SortEnum;
  products: ProductDto[];
};

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
  switch (action.type) {
    case SortEnum.RaitingASC: {
      return {
        sort: SortEnum.RaitingASC,
        products: state.products.sort((a, b) => (a.initialRaiting > b.initialRaiting ? 1 : -1)),
      };
    }
    case SortEnum.RaitingDESC: {
      return {
        sort: SortEnum.RaitingDESC,
        products: state.products.sort((a, b) => (a.initialRaiting > b.initialRaiting ? -1 : 1)),
      };
    }
    case SortEnum.PriceASC: {
      return {
        sort: SortEnum.PriceASC,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    }
    case SortEnum.PriceDESC: {
      return {
        sort: SortEnum.PriceDESC,
        products: state.products.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };
    }
    default: {
      return {
        products: state.products,
      };
    }
  }
};
