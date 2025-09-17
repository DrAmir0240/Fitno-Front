import { FaCheck } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";

export const TicketItem =({ ticket }) => {
  return (
    <ul className="bg-[#A6CBFF] rounded-xl flex justify-around mt-3 py-3">
      <li>{ticket.title}</li>
      <li>{ticket.date}</li>
      <li>{ticket.summary}</li>
      <li className="flex gap-3">
        <FaCheck size={24} color="#289DFC" />
        <BsExclamationCircleFill color="#1B72C0" size={27} />
      </li>
    </ul>
  );
}

