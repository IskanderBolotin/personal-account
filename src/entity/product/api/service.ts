import { appInstance } from "@/src/shared/api";
import { ApiProductArgs, ProductDto } from "../model";

const serviceUrl = "/product";

const productService = {
  postProduct: (args: ApiProductArgs) => {
    return appInstance.post<ProductDto[]>(`${serviceUrl}/find`, args);
  },
};

export { productService };
