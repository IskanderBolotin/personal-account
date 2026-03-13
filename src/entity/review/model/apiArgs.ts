import { RaitnigValuesType } from "@/src/shared/ui/raiting";

export type ApiNavigationArgs = {
  category: number;
};

export type ApiReviewCreateArgs = {
  name: string;
  title: string;
  description?: string;
  rating: RaitnigValuesType;
  productId: string;
};
