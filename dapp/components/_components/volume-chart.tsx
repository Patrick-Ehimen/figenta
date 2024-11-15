"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const totalVolumeData = [
  { date: "Jul", value: 2000000 },
  { date: "Aug", value: 6000000 },
  { date: "Sep", value: 10000000 },
  { date: "Oct", value: 12000000 },
  { date: "Nov", value: 10000000 },
  { date: "Dec", value: 8124632.58 },
];

const totalLiquidityData = [
  { date: "Jul", value: 2000000000 },
  { date: "Aug", value: 3000000000 },
  { date: "Sep", value: 4000000000 },
  { date: "Oct", value: 5000000000 },
  { date: "Nov", value: 4000000000 },
  { date: "Dec", value: 3006124632.55 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: { value: number }[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border p-2 shadow-sm">
        <p className="label">{`${label} : ${formatCurrency(
          payload[0].value
        )}`}</p>
      </div>
    );
  }

  return null;
};

export default function VolumeChart() {
  const [volumeView, setVolumeView] = useState("day");
  const [liquidityView, setLiquidityView] = useState("week");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal text-gray-600">
            Total Volume
          </CardTitle>
          <Tabs value={volumeView} onValueChange={setVolumeView}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="day"
                className={`${volumeView === "day" ? "" : "text-[#1379ffcb]"}`}
              >
                Day
              </TabsTrigger>
              <TabsTrigger
                value="week"
                className={`${volumeView === "week" ? "" : "text-[#1379ffcb]"}`}
              >
                Week
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className={`${
                  volumeView === "month" ? "" : "text-[#1379ffcb]"
                }`}
              >
                Month
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <span className="text-gray-500">$</span>
            8,124,632
            <span className="text-gray-500">.58</span>
          </div>
          <div className="text-xs text-muted-foreground my-5">Dec 23, 2022</div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={totalVolumeData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(217, 91%, 60%)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(217, 91%, 60%)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis
                  tickFormatter={(value) => `$${value / 1000000}M`}
                  axisLine={false}
                  tickLine={false}
                  tickCount={5}
                  domain={[2000000, 12000000]}
                />
                <Tooltip
                  content={
                    <CustomTooltip active={false} payload={[]} label="" />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(217, 91%, 60%)"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal text-gray-600">
            Total Liquidity
          </CardTitle>
          <Tabs value={liquidityView} onValueChange={setLiquidityView}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="day"
                className={`${
                  liquidityView === "day" ? "" : "text-[#1379ffcb]"
                }`}
              >
                Day
              </TabsTrigger>
              <TabsTrigger
                value="week"
                className={`${
                  liquidityView === "week" ? "" : "text-[#1379ffcb]"
                }`}
              >
                Week
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className={`${
                  liquidityView === "month" ? "" : "text-[#1379ffcb]"
                }`}
              >
                Month
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <span className="text-gray-500">$</span>
            3,006,124,632
            <span className="text-gray-500">.55</span>
          </div>
          <div className="text-xs text-muted-foreground my-5">
            Nov 23, 2021 - Dec 23, 2022
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={totalLiquidityData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis
                  tickFormatter={(value) => `$${value / 1000000000}B`}
                  axisLine={false}
                  tickLine={false}
                  tickCount={5}
                  domain={[0, 5000000000]}
                />
                <Tooltip
                  content={
                    <CustomTooltip active={false} payload={[]} label="" />
                  }
                />
                <Bar
                  dataKey="value"
                  fill="hsl(217, 91%, 60%)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
