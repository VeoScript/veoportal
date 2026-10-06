import type { JSX, ReactNode } from "react";
import dynamic from "next/dynamic";

import AppearanceControls from "~/components/appearance-controls";

const PromotionFlag = dynamic(() => import("~/components/promotion-flag"));

const HAS_PROMOTION = process.env.PROMOTION_FLAG === "true" ? true : false;

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
  return (
    <main className="mx-auto w-full min-[1920px]:max-w-[1920px]">
      {HAS_PROMOTION && <PromotionFlag />}
      <AppearanceControls />
      <div className="flex h-full w-full flex-col border-x border-neutral-200 dark:border-neutral-700">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
