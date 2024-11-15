import React from "react";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Avalanche, BNB, Ethereum, LogoIcon } from "@/public";

export default function EthHub() {
  return (
    <Card className="p-4">
      <div className="grid grid-cols-5 items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            alt="Ethereum logo"
            className="w-8 h-8"
            src={Ethereum}
            width={24}
            height={24}
          />
          <span className="font-bold ">ETH Mainnet</span>
        </div>
        <div className="flex items-center gap-1">
          {[
            { src: Ethereum, alt: "Ethereum logo" },
            { src: BNB, alt: "Binance logo" },
            { src: Avalanche, alt: "Avalanche logo" },
            { src: LogoIcon, alt: "Platform logo" },
          ].map((logo) => (
            <Image
              key={logo.alt}
              alt={logo.alt}
              className="w-6 h-6"
              src={logo.src}
              width={24}
              height={24}
            />
          ))}
        </div>
        <div className="font-bold">$777,099.25</div>
        <div className="font-bold">$16,352.73</div>
        <div className="flex items-center justify-between">
          <span className="font-bold">12.16%</span>
          <ArrowRight className="w-5 h-5 text-blue-500" />
        </div>
      </div>
    </Card>
  );
}
