import { appInstance } from "@/src/shared/api";
import { ReviewDto } from "../model";

const serviceUrl = "/review";

const reviewService = {
  postNavigation: () => {
    return appInstance.post<ReviewDto[]>(`${serviceUrl}/find`);
  },
};

export { reviewService };
