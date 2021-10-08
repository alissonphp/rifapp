import { Reserve, Ticket } from "types/Reserve";
import { TotalPartnerCommission, TotalReserveAmmount } from "utils/ammounts";

const ReserveDetails = (data: any) => {
  const reserve: Reserve = data.data as Reserve;

  return (
    <>
      <div className="container">
        <div className="row p-4">
          <div className="col-md-12">
            <h2>Reserva #{reserve.id}</h2>
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <td width="20%">Comprador</td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td width="220px">Nome:</td>
                          <td>{reserve.buyer.name}</td>
                        </tr>
                        <tr>
                          <td>CPF:</td>
                          <td>{reserve.buyer.document}</td>
                        </tr>
                        <tr>
                          <td>Telefone:</td>
                          <td>
                            <a href={`https://wa.me/${reserve.buyer.phone}`}>
                              {reserve.buyer.phone}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="20%">Parceiro</td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td width="220px">Nome:</td>
                          <td>{reserve.partner.name}</td>
                        </tr>
                        <tr>
                          <td>Telefone:</td>
                          <td>
                            <a href={`https://wa.me/${reserve.partner.phone}`}>
                              {reserve.partner.phone}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="20%">Tickets</td>
                  <td>
                    {reserve.tickets.map((t: Ticket) => {
                      return (
                        <div key={t.id} className="badge bg-success mx-1">
                          {t.number}
                        </div>
                      );
                    })}
                  </td>
                </tr>
                <tr>
                  <td width="20%">Valores</td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td width="220px">(=) Total:</td>
                          <td>R$ {TotalReserveAmmount(reserve.tickets)}</td>
                        </tr>
                        <tr>
                          <td>(-) Comissão do parceiro:</td>
                          <td>R$ {TotalPartnerCommission(reserve.tickets)}</td>
                        </tr>
                        <tr>
                          <td>(=) A ser recebido:</td>
                          <td>
                            R${" "}
                            {TotalReserveAmmount(reserve.tickets) -
                              TotalPartnerCommission(reserve.tickets)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReserveDetails;
