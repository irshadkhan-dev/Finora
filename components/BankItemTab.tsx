"use client";

import { cn, formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const BankItemTab = ({ account, appwriteItemId }: BankItemTabProps) => {
  const searchParams = useSearchParams();
  const isActive = appwriteItemId === account?.appwriteItemId;
  const router = useRouter();

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account.appwriteItemId,
    });

    router.push(newUrl, { scroll: false });
  };
  return (
    <div
      onClick={handleBankChange}
      className={cn(
        "gap-[18px] border-b-2 flex px-2 sm:px-4 py-2 transition-all",
        {
          "border-blue-600": isActive,
        }
      )}
    >
      <p
        className={cn("text-16 line-clamp-1 flex-1 font-medium text-gray-500", {
          "text-blue-600": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};

export default BankItemTab;
