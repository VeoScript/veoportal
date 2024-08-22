"use client";

import Image from "next/image";

type Props = {
  src: string;
};

const ProfileHolder = ({ src }: Props): JSX.Element => {
  return (
    <Image
      className="h-[10rem] w-[10rem] rounded-full border-4 border-white bg-neutral-300 object-cover"
      src={src}
      alt="Profile"
      priority
      width={100}
      height={100}
      quality={100}
      placeholder="blur"
      blurDataURL={src}
    />
  );
};

export default ProfileHolder;
