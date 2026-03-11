import { RaitnigValuesType } from "@/src/shared/ui/raiting";

export type ReviewDto = {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: RaitnigValuesType;
  createdAt: Date;
};
