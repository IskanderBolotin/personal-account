import { appInstance } from "@/src/shared/api";
import { ApiReviewCreateArgs } from "../model";

const serviceUrl = "/review";

const reviewService = {
  postCreateDemo: (args: ApiReviewCreateArgs) => {
    return appInstance.post(`${serviceUrl}/create`, args);
  },
};

export { reviewService };
