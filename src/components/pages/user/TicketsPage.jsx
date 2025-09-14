import { BreadCrumb } from "@/components/shared";

import { UserLayout } from "@/layouts";

import TicketItems from "@/components/templates/profile/tickets/TicketItems";

function TicketsPage() {
  return (
    <UserLayout>
      <BreadCrumb title="تاریخچه تیکت ها" />

      <TicketItems />
    </UserLayout>
  );
}

export default TicketsPage;
