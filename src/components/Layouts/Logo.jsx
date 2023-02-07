import React from "react";
import LogoImg from "@/assets/images/Logo.png";
import Image from 'next/image'
// className = "w-full"
export const Logo = () => {
  return <Image src={LogoImg} alt="Artboardz Logo" />;
};
