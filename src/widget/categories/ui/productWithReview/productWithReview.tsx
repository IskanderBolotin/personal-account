import { ProductDto } from "@/src/entity/product/model";
import { Product } from "@/src/entity/product/ui";
import { ReviewDto } from "@/src/entity/review/model";
import s from "./productWithReview.module.scss";
import { Card } from "@/src/shared/ui";
import { isDefinedArray } from "@/src/shared/libs";
import { ProductReview } from "@/src/entity/review/ui";

type Props = {
  product: ProductDto;
};

const ProductWithReview: React.FC<Props> = ({ product }) => {
  const { reviews } = product;
  return (
    <div>
      <Product data={product} />
      <div className={s.review}>
        {isDefinedArray(reviews) && (
          <Card type="gray">
            {reviews.map((review) => {
              return <ProductReview review={review} />;
            })}
          </Card>
        )}
      </div>
    </div>
  );
};

export { ProductWithReview };
