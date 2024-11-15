"use client";

import Image from "next/image";

import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import Logo from "../../app/icon.svg";

const priceData = [
  { date: "Dec 22", price: 0.5, volume: "5.0M" },
  { date: "", price: 1.5, volume: "5.5M" },
  { date: "", price: 1.8, volume: "5.5M" },
  { date: "", price: 1.6, volume: "5.5M" },
  { date: "", price: 2.0, volume: "5.5M" },
  { date: "", price: 1.7, volume: "5.5M" },
  { date: "", price: 1.9, volume: "5.5M" },
  { date: "", price: 1.8, volume: "6.0M" },
  { date: "Dec 23", price: 2.0, volume: "6.0M" },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
  volume: {
    label: "Volume",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function FGAToken() {
  return (
    <main>
      <h2 className="text-[20px] font-bold mb-5">FGA Token</h2>
      <Card className="overflow-hidden w-fit">
        <div className="bg-[#d6e8ff] p-4">
          <div className="flex items-center gap-3 ">
            <Image src={Logo} alt="logoimg" />
            <div>
              <div className="text-sm text-gray-600">Token Price</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">$2.24</span>
                <span className="text-sm text-green-500">↗ 34.65%</span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          <ChartContainer className="h-[200px] mt-10 mb-7" config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={priceData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={8}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={8}
                tickFormatter={(value) => `$${value.toFixed(2)}`}
                domain={[0.5, 2.5]}
                ticks={[0.5, 1.0, 1.5, 2.0, 2.5]}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#3b82f6" }}
                tickMargin={8}
                dataKey="volume"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </main>
  );
}
