import { withMainLayout } from "@/src/widget/layouts/ui";
import { CourseProps } from "../../model";

const CoursePage: React.FC<CourseProps> = ({ menu, page, category, products }) => {
  return <>{products?.length}</>;
};

const CoursePageWithLayout = withMainLayout(CoursePage);

export { CoursePageWithLayout };
