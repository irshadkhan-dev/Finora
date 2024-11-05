"use client";
import React from "react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import Link from "next/link";
import { Plus } from "lucide-react";
import AnimatedCount from "./AnimatedCount";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

const Chart = ({ accounts, totalBanks, totalCurrentBalance }: ChartProps) => {
  const chartData = accounts.map((bank, index) => ({
    bankName: bank.name,
    balance: bank.currentBalance,

    fill: `hsl(var(--chart-${index + 1}))`,
  }));

  return (
    <Card className="w-full">
      <CardContent className="flex">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-w-[170px]  w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="balance"
              nameKey="bankName"
              innerRadius={50}
              strokeWidth={6}
              className=""
            ></Pie>
          </PieChart>
        </ChartContainer>

        <div className="w-full h-full py-5">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <p className="font-semibold text-base">
                {totalBanks} Banks Account
              </p>
              <Link
                href={"/banks"}
                className="flex gap-1 text-gradient items-center max-sm:hidden"
              >
                <Plus className="text-[#0179FE] h-5 w-5" />
                <span>Add bank</span>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#475467]">
                Total Current Balance
              </p>

              <AnimatedCount amount={Number(totalCurrentBalance)} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chart;
