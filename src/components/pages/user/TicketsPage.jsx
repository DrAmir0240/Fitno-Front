import { BreadCrumb } from "@/components/shared";
import TicketItems from "@/components/templates/profile/tickets/TicketItems";

function TicketsPage() {
  return (
    <>
      <BreadCrumb title="تاریخچه تیکت ها" />

      <TicketItems />
    </>
  );
}

export default TicketsPage;
