import { Title } from "@/src/shared/ui";
import { withMainLayout } from "@/src/widget/layouts/ui";

const Error500: React.FC = () => {
  return (
    <>
      <Title>Ошибка 500</Title>
    </>
  );
};

export default withMainLayout(Error500);
