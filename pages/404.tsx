import { Title } from "@/src/shared/ui";
import { withMainLayout } from "@/src/widget/layouts/ui";

const Error404: React.FC = () => {
  return (
    <>
      <Title>Ошибка 404</Title>
    </>
  );
};

export default withMainLayout(Error404);
