import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <main className="container mx-auto">
      <div className="flex h-full w-full flex-col border-x border-neutral-200">{children}</div>
    </main>
  );
};

export default MainLayout;
