import { ProductDto } from "@/src/entity/product/model";
import { PageDto } from "@/src/entity/topPage/model";
import { DefaultPageProps } from "@/src/widget/layouts/model";

export type CategoryAliasProps = {
  page: PageDto;
  products: ProductDto[];
} & DefaultPageProps;
