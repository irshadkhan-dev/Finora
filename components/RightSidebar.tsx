import React from "react";
import { Plus } from "lucide-react";
import BankCard from "./BankCard";
import Category from "./Category";
import { countTransactionCategories } from "@/lib/utils";
import { UserCircle2Icon } from "lucide-react";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions!);
  return (
    <div className="w-full flex flex-col gap-10 border-l ">
      <div className="flex flex-col ">
        <div className="flex">
          <img
            src="/icons/rightsidebarimg.png"
            alt=""
            className="h-32 w-full"
          />
        </div>

        <div className="flex flex-col w-full relative">
          <div className="flex flex-col px-6 gap-6">
            <div className="size-24 border-4 border-white rounded-full shadow-lg absolute -top-10">
              <UserCircle2Icon className="size-full" />
            </div>

            <div className="flex flex-col gap-1 mt-20 ">
              <div className="flex">
                <span className="font-semibold text-2xl">
                  {user.firstName} {user.lastName}
                </span>
              </div>

              <div className="flex">
                <span className="text-base text-[#475467]">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-6 w-full gap-6">
        <div className="flex justify-between gap-4 items-center">
          <div className=" flex">
            <span>My Banks</span>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <Plus className="h-4 w-4" />
            <span className="text-sm font-semibold text-[#475467]">
              Add bank
            </span>
          </div>
        </div>

        {banks!.length > 0 && (
          <div className="relative flex flex-1 items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks![0].id}
                account={banks![0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>

            {banks![1] && (
              <div className="right-0 z-0 w-[90%] absolute top-8">
                <BankCard
                  key={banks![1].id}
                  account={banks![1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          <div className="space-y-5">
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
