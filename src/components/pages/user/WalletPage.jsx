import { UserLayout } from "@/layouts";
import { BreadCrumb } from "@/components/shared";
import { TransactionList, WalletActions, WalletBalance } from "@/components/templates/profile/wallet";

export default function WalletPage() {
  return (
    <UserLayout>
      <BreadCrumb title="کیف پول" />
      
      <WalletBalance balance="0" />
      <WalletActions />
      <TransactionList />
    </UserLayout>
  );
}