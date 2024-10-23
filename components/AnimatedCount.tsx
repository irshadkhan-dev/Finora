import React from "react";
import Countup from "react-countup";
const AnimatedCount = ({ amount }: { amount: number }) => {
  return (
    <p className="text-3xl font-semibold w-full">
      <Countup end={amount} decimal="," decimals={2} prefix="$" />
    </p>
  );
};

export default AnimatedCount;
