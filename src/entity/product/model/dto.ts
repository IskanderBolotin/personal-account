import { ReviewDto } from "@/src/entity/review/@x/product";

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
  initailRaiting: number;
  revies: ReviewDto[];
  reviewCount: number;
  reviewAvg?: number;
  advantages: string;
};
