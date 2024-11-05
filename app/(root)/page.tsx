import BankInfo from "@/components/BankInfo";
import BankItemTab from "@/components/BankItemTab";
import Chart from "@/components/Chart";
import { Pagination } from "@/components/Pagination";

import RightSidebar from "@/components/RightSidebar";
import TransactionsTable from "@/components/TransactionsTable";
import { Button } from "@/components/ui/button";

import { SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getLoggedInUser, getUserInfo } from "@/lib/actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";

export default async function Page({
  searchParams: { id, page },
}: SearchParamsProps) {
  const currentPage = Number(page as string) || 1;

  const user = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: user?.$id,
  });

  if (!accounts) return;

  const appwriteItemId = (id as string) || accounts?.data[0].appwriteItemId;

  console.log(accounts);

  const Account = await getAccount({ appwriteItemId });

  return (
    <>
      <SidebarTrigger size={"lg"} className="sm:hidden" />
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="col-span-1 lg:col-span-2 sm:pr-8 sm:py-12 px-5">
          <div className="flex flex-col gap-5 w-full ">
            <div className="flex flex-col gap-2 max-w-full">
              <h1 className="text-2xl font-bold">
                Welcome,{" "}
                <span className="text-gradient">
                  {user.firstName} {user.lastName}
                </span>
              </h1>
              <p className="text-[#475467] text-sm">
                Access & manage your account and transactions efficiently.
              </p>
            </div>

            <Chart
              accounts={accounts?.data}
              totalBanks={accounts?.totalBanks}
              totalCurrentBalance={accounts?.totalCurrentBalance}
            />

            <div className="flex flex-col gap-8">
              <div className="flex justify-between gap-3">
                <p className="font-semibold text-2xl">Recent Transactions</p>
                <Button
                  size={"default"}
                  variant={"outline"}
                  className="text-sm font-semibold"
                >
                  View all
                </Button>
              </div>

              <div className="w-full">
                <Tabs defaultValue={appwriteItemId} className="w-full">
                  <TabsList className="custom-scrollbar mb-8 flex w-full flex-nowrap ">
                    {accounts.data.map((account: Account) => (
                      <TabsTrigger
                        className=""
                        key={account.id}
                        value={account.appwriteItemId}
                      >
                        <BankItemTab
                          key={account.id}
                          account={account}
                          appwriteItemId={appwriteItemId}
                        />
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {accounts.data.map((account: Account) => (
                    <TabsContent
                      value={account.appwriteItemId}
                      key={account.id}
                      className="space-y-4"
                    >
                      <BankInfo
                        account={account}
                        appwriteItemId={appwriteItemId}
                        type="full"
                      />

                      <TransactionsTable transactions={Account?.transactions} />
                    </TabsContent>
                  ))}
                </Tabs>
                <div className="border-b w-full border-[#EAECF0]" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden col-span-1">
          <RightSidebar
            user={user}
            transactions={Account?.transactions}
            banks={accounts?.data.slice(0, 2)}
          />
        </div>
      </div>
    </>
  );
}
