import { MainProps } from "@/src/pages/main/model";
import { getMainStaticProps as getStaticProps } from "@/src/pages/main/model/getStaticProps";
import { MainPageWithLayout } from "@/src/pages/main/ui";

const Main: React.FC<MainProps> = ({ menu, category }) => {
  return <MainPageWithLayout menu={menu} category={category} />;
};

export { getStaticProps };

export default Main;

