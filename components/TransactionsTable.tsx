import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div
      className={`flex justify-center items-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2 ${
        status === "Processing"
          ? "bg-[#F2F4F7] text-[#344054]"
          : "bg-[#ECFDF3] text-[#027A48]"
      }`}
    >
      <div
        className={`size-2 rounded-full flex flex-shrink-0 ${
          status === "Processing" ? "bg-[#344054]" : "bg-[#027A48]"
        }`}
      />

      <span className="w-full">{status}</span>
    </div>
  );
};

const CategoryBadge = ({ category }: { category: string }) => {
  return (
    <div
      className={`flex justify-center items-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2 text-[#175CD3]`}
    >
      <div className={`size-2 rounded-full flex flex-shrink-0 bg-[#1570EF]`} />

      <span className="w-full">{category}</span>
    </div>
  );
};

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader className="h-12">
          <TableRow className="bg-[#F9FAFB]">
            <TableHead className="rounded-t-lg px-2">Transaction</TableHead>
            <TableHead className="px-2">Amount</TableHead>
            <TableHead className="px-2">Status</TableHead>
            <TableHead className="px-2">Date</TableHead>
            <TableHead className="px-2 max-md:hidden">Channel</TableHead>
            <TableHead className="rounded-t-lg px-2 max-md:hidden">
              Category
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((transaction) => {
            const status = getTransactionStatus(new Date(transaction.date));
            const date = formatDateTime(new Date(transaction.date)).dateOnly;
            const amount = String(transaction.amount);

            return (
              <TableRow
                key={transaction.id}
                className={`${
                  amount.startsWith("-") ? " bg-[#FFFBFA]" : "bg-[#F6FEF9]"
                }`}
              >
                <TableCell className="max-w-[250px] pl-2 pr-10">
                  <div className="flex gap-5 items-center">
                    <div className="flex size-10 rounded-full flex-shrink-0">
                      <img
                        src={transaction.image}
                        alt=""
                        className="size-full rounded-full shrink-0"
                      />
                    </div>
                    <span className="text-sm font-semibold text-[#344054]">
                      {removeSpecialCharacters(transaction.name)}
                    </span>
                  </div>
                </TableCell>

                <TableCell
                  className={`pl-2 pr-10 font-semibold ${
                    amount.startsWith("-") ? "text-[#F04438]" : "text-[#039855]"
                  }`}
                >
                  {formatAmount(transaction.amount)}
                </TableCell>
                <TableCell className="pl-2 pr-10">
                  <StatusBadge status={status} />
                </TableCell>
                <TableCell className="pl-2 pr-10 min-w-32">{date}</TableCell>
                <TableCell className="pl-2 pr-10 min-w-24 capitalize">
                  {transaction.paymentChannel}
                </TableCell>
                <TableCell className="pl-2 pr-10 max-md:hidden">
                  <CategoryBadge category={transaction.category} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
