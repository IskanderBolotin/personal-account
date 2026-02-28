import { CourseProps } from "@/src/pages/courses/model";
import { getCourseStaticProps as getStaticProps } from "@/src/pages/courses/model/getStaticProps";
import { getCourseStaticPaths as getStaticPaths } from "@/src/pages/courses/model/getStaticPath";
import { CoursePageWithLayout } from "@/src/pages/courses/ui";

const Course: React.FC<CourseProps> = ({ menu, category, products, page }) => {
  return <CoursePageWithLayout menu={menu} category={category} products={products} page={page} />;
};

export { getStaticProps };
export { getStaticPaths };

export default Course;
