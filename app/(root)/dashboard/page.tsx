import DashBoardCard from "@/components/DashBoardCard";
import { Button } from "@/components/ui/button";
import { SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CONNECTED_BANKS } from "@/data";
import { getUserInfo } from "@/lib/actions";
import { getLoggedInUser } from "@/lib/server/appwrite";

export default async function Page() {
  const user = await getLoggedInUser();

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      <div className="col-span-1 lg:col-span-2 sm:pr-8 sm:py-12 px-5">
        <SidebarTrigger className="sm:hidden" />
        <div className="flex flex-col gap-5 w-full ">
          <div className="flex flex-col gap-2 max-w-full">
            <h1 className="text-2xl font-bold">
              Welcome, <span className="text-gradient">{user?.name}</span>
            </h1>
            <p className="text-[#475467] text-sm">
              Access & manage your account and transactions efficiently.
            </p>
          </div>

          <DashBoardCard />

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
              <div className="flex max-w-md justify-between gap-2">
                {CONNECTED_BANKS.map((bank) => (
                  <a
                    key={bank}
                    className="text-[#667085] font-semibold text-sm sm:text-base cursor-pointer"
                  >
                    {bank}
                  </a>
                ))}
              </div>
              <div className="border-b w-full border-[#EAECF0] mt-2" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 bg-[#F5FAFF] rounded sm:py-5 sm:px-6 px-3 py-3">
                <div className="size-10 flex-shrink-0 flex">
                  <div className="size-full rounded-full bg-[#1570EF] flex items-center justify-center text-white font-medium text-base">
                    BA
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between items-center ">
                    <p className="font-semibold text-lg">Bank of America</p>
                    <Button className="rounded-full px-3 max-h-[24px] bg-[#ECFDF3] text-[#027A48] hover:bg-[#ECFDF3]">
                      savings
                    </Button>
                  </div>

                  <div className="">
                    <p className="font-semibold text-lg text-gradient">
                      $1500.12
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <Table>
                  <TableHeader className="h-12">
                    <TableRow className="bg-[#F9FAFB]">
                      <TableHead className="rounded-t-lg">
                        Transaction
                      </TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="rounded-t-lg text-center">
                        Category
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-lg:hidden col-span-1">rightside bar</div>
    </div>
  );
}
