import { RaitnigValuesType } from "@/src/shared/ui/raiting";

export type ReviewFormModel = {
  name: string;
  title: string;
  description: string;
  rating: RaitnigValuesType;
};

export const enum ReviewFormNameType {
  name = "name",
  title = "title",
  description = "description",
  rating = "rating",
}
