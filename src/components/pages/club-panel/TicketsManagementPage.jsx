import React from "react";
import ClubPanelLayout from "@/layouts/ClubPanelLayout";
import { TicketHeader, TicketList } from "@/components/templates/club-panel/tickets";

function TicketsManagementPage() {
  const sampleTickets = [
    { id: 1, title: "عنوان", date: "1402/05/15", summary: "خلاصه تیکت" },
    { id: 2, title: "عنوان", date: "1402/05/16", summary: "خلاصه تیکت" },
    { id: 3, title: "عنوان", date: "1402/05/17", summary: "خلاصه تیکت" },
  ];

  return (
    <ClubPanelLayout>
      <div className="bg-[#F2F2F2] rounded-4xl p-4 text-center">
        <h1 className="font-bold text-xl">مدیریت تیکت ها</h1>
        
        <TicketHeader />
        <TicketList tickets={sampleTickets} />
      </div>
    </ClubPanelLayout>
  );
}

export default TicketsManagementPage;