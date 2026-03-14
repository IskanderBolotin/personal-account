import { ProductDto } from "@/src/entity/product/model";
import { Product } from "@/src/entity/product/ui";
import cn from "classnames";
import s from "./productWithReview.module.scss";
import { Card } from "@/src/shared/ui";
import { isDefinedArray } from "@/src/shared/libs";
import { ProductReview, ReviewForm } from "@/src/entity/review/ui";
import { useCallback, useRef, useState } from "react";

type Props = {
  product: ProductDto;
};

const ProductWithReview: React.FC<Props> = ({ product }) => {
  const { reviews, _id } = product;
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = useCallback(() => {
    setIsReviewOpen(true);
    setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }, []);

  const reviewButtonHandler = () => {
    setIsReviewOpen((v) => !v);
  };

  return (
    <div>
      <Product
        data={product}
        isReviewOpen={isReviewOpen}
        readReviewHanlder={reviewButtonHandler}
        raitngHandler={scrollToReview}
      />
      <div className={s.review} ref={reviewRef}>
        <div className={cn(s.card, isReviewOpen && s.open)}>
          <Card type="gray">
            {isDefinedArray(reviews) && (
              <>
                {reviews.map((review) => {
                  return <ProductReview review={review} key={review._id} />;
                })}
              </>
            )}
            <ReviewForm productId={_id} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export { ProductWithReview };
