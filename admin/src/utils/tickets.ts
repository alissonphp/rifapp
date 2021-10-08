import { Ticket } from "types/Reserve";

export const TicketsToString = (tickets: Ticket[]) => {
  return tickets.map((t: Ticket) => t.number).join(", ");
};
