import { appInstance } from "@/src/shared/api";
import { ApiNavigationArgs, ApiPageByAliasArgs, NavigationDto, PageDto } from "../model";

const serviceUrl = "/top-page";

const topPageService = {
  postNavigation: (args: ApiNavigationArgs) => {
    const { category } = args;
    return appInstance.post<NavigationDto[]>(`${serviceUrl}/find`, { firstCategory: category });
  },
  getPageByAlias: (args: ApiPageByAliasArgs) => {
    const { alias } = args;
    return appInstance.get<PageDto>(`${serviceUrl}/byAlias/${alias}`);
  },
};

export { topPageService };
