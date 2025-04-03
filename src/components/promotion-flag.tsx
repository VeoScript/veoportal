"use client";

import Link from "next/link";
import Image from "next/image";

function PromotionFlag() {
  return (
    <div className="absolute top-0 z-30 w-full bg-blue-300 p-1 text-white">
      <div className="flex flex-row items-center justify-center gap-x-1">
        <p className="text-[0.7rem] md:text-xs">Promotion:</p>
        <p className="text-[0.8rem] font-semibold text-blue-600 md:text-sm">
          Introducing Pandan POS
        </p>
        <Link
          className="ml-2 transition duration-200 ease-in-out hover:opacity-50"
          href="https://play.google.com/store/apps/details?id=com.veoscript.PandanPOS"
          target="_blank"
        >
          <Image
            className="h-[0.8rem] w-auto object-cover md:h-[1.5rem]"
            src="/images/promotions/google-play-button.webp"
            alt="Google Play Button"
            width={100}
            height={100}
            quality={50}
          />
        </Link>
      </div>
    </div>
  );
}

export default PromotionFlag;
