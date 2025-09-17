import { TicketItem } from "./TicketItem";

export const TicketList = ({ tickets }) => {
  return (
    <div className="bg-white rounded-2xl p-3 mt-5">
      {tickets.map((ticket, index) => (
        <TicketItem key={index} ticket={ticket} />
      ))}
    </div>
  );
};
