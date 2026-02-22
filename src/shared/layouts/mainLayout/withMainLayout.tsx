import { MainLayout } from "./mainLayout";

const withMainLayout = <T extends Record<string, unknown>>(Component: React.FC<T>) => {
  return function WrappedComponent(props: T) {
    return (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
  };
};

export { withMainLayout };
