import { appInstance } from "@/src/shared/api";
import { ApiReviewCreateArgs, ReviewDto } from "../model";

const serviceUrl = "/review";

const reviewService = {
  postNavigation: () => {
    return appInstance.post<ReviewDto[]>(`${serviceUrl}/find`);
  },
  postCreateDemo: (args: ApiReviewCreateArgs) => {
    return appInstance.post(`${serviceUrl}/create-demo`, args);
  },
};

export { reviewService };
