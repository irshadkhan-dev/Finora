"use client";

import { generateThumbnail } from "./actions";

export default function ThumbnailPage() {
  const onChlickHandler = async () => {
    generateThumbnail("a monkey eating banana");
  };
  return (
    <div>
      <button onClick={onChlickHandler}>generate image</button>
    </div>
  );
}
