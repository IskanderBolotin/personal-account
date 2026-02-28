import { ApiNavigationArgs } from "../model";
import { topPageService } from "./service";

export const useGetNavigation = async (args: ApiNavigationArgs) => {
  try {
    const res = await topPageService.postNavigation(args);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
