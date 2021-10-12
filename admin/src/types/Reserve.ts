export type Reserve = {
  id: number;
  partner: Partner;
  buyer: Buyer;
  tickets: Ticket[];
  confirmed: boolean;
  createdAt: string;
};

export type Partner = {
  id?: number;
  code: string;
  name: string;
  phone: string;
  photo_url?: string;
};

type Buyer = {
  name: string;
  phone: string;
  email?: string;
  document: string;
};

export type Ticket = {
  id: number;
  number: number;
  status: string;
};
