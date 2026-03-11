import { ReviewDto } from "@/src/entity/review/@x/product";
import { RaitnigValuesType } from "@/src/shared/ui/raiting";

export type ProductCharacteristic = {
  value: string;
  name: string;
};

export type ProductDto = {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  description: string;
  characteristics: ProductCharacteristic[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  initialRaiting: RaitnigValuesType;
  reviews: ReviewDto[];
  reviewCount: number;
  reviewAvg?: RaitnigValuesType;
  advantages: string;
  disadvantages: string;
};
