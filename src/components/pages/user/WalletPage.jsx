import { BreadCrumb } from "@/components/shared";
import {
  TransactionList,
  WalletActions,
  WalletBalance,
} from "@/components/templates/profile/wallet";

export default function WalletPage() {
  return (
    <>
      <BreadCrumb title="کیف پول" />

      <WalletBalance balance="0" />
      <WalletActions />
      <TransactionList />
    </>
  );
}
