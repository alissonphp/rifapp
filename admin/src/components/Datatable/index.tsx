import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import DataTable from "react-data-table-component";
import { Reserve } from "types/Reserve";
import { BASE_URL } from "utils/requests";
import { TicketsToString } from "utils/tickets";
import { TotalReserveAmmount } from "utils/ammounts";
import ReserveDetails from "components/ReserveDetails";

const columns = [
  {
    name: "#",
    selector: (row: Reserve) => row.id,
    sortable: true,
  },
  {
    name: "Data",
    selector: (row: Reserve) => row.createdAt,
    sortable: true,
  },
  {
    name: "Parceiro",
    selector: (row: Reserve) => row.partner.name,
    sortable: true,
    risize: true
  },
  {
    name: "Comprador",
    selector: (row: Reserve) => row.buyer.name,
    sortable: true,
  },
  {
    name: "CPF",
    selector: (row: Reserve) => row.buyer.document,
    sortable: true,
  },
  {
    name: "Tickets",
    selector: (row: Reserve) => TicketsToString(row.tickets),
    sortable: true,
  },
  {
    name: "Total (RS)",
    selector: (row: Reserve) => TotalReserveAmmount(row.tickets),
    sortable: true,
  },
  {
    name: "Confirmado",
    selector: (row: Reserve) => (row.confirmed ? "Sim" : "Não"),
    sortable: true,
  },
  {
    name: "Ação",
    cell: (row: Reserve) => (!row.confirmed ? <Link to={{
      pathname: "/confirmation",
      state: {
        reserve: row
      }
    }} className="btn btn-outline-success btn-sm"> confirmar </Link> : "-"),
  },
];

const conditionalRowStyles = [
  {
    when: (row: Reserve) => row.confirmed,
    style: {
      backgroundColor: "rgb(185, 244, 210)",
    },
  },
];

const Datatable = () => {
  const [data, setData] = useState<Reserve[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/reserves`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <DataTable
      title="Controle de vendas do sorteio"
      columns={columns}
      data={data}
      striped={true}
      conditionalRowStyles={conditionalRowStyles}
      expandableRows
      expandableRowsComponent={ReserveDetails}
      pagination
    />
  );
};

export default Datatable;
