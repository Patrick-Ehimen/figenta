import EthHub from "./eth-hub";
import BnbHub from "./bnb-hub";
import AvalancheHub from "./avalanche-hub";

export default function TopHub() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Top Cross-Chain Hub</h1>
      <div className="grid gap-4">
        <div className="grid grid-cols-5 gap-4 text-sm text-gray-500 px-4">
          <div>Token Pool</div>
          <div>Rewards</div>
          <div>TVL</div>
          <div>24h Vol</div>
          <div>Highest APR</div>
        </div>
        <EthHub />
        <BnbHub />
        <AvalancheHub />
      </div>
    </div>
  );
}
