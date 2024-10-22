import Image from "next/image";
import React from "react";

const AuthDisplayImage = () => {
  return (
    <div className="max-w-full max-h-full">
      <Image
        src={"/icons/auth-image.svg"}
        alt="auth image"
        width={600}
        height={600}
        className="object-contain"
      />
    </div>
  );
};

export default AuthDisplayImage;
