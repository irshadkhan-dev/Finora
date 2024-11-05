import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getLoggedInUser } from "@/lib/actions";
import { getAccounts } from "@/lib/actions/bank.actions";

import React from "react";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  return (
    <>
      <SidebarTrigger size={"lg"} className="sm:hidden" />
      <section className="flex">
        <div className="my-banks">
          <HeaderBox
            title="My Bank Accounts"
            subtext="Effortlessly manage your banking activites."
          />

          <div className="space-y-4">
            <h2 className="header-2">Your cards</h2>
            <div className="flex flex-wrap gap-6">
              {accounts &&
                accounts.data.map((a: Account) => (
                  <BankCard
                    key={accounts.id}
                    account={a}
                    userName={loggedIn?.firstName}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyBanks;
