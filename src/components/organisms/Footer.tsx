import React from "react";
import { Text } from "../atoms/Text";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full p-3 bg-accent-2">
      <Text weight="light" size="xs">
        &copy; {new Date().getFullYear()}, Jerome Villaruel (Veoscript). All
        rights reserved.
      </Text>
    </div>
  );
};

export default Footer;
