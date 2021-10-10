import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { TNumber } from "types/Number";
import { PHONE_CLEANER } from "utils/transform";

const Success = () => {
  const location: any = useLocation();
  return (
    <>
      <NavBar />
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mt-3 text-success">
              Reserva realizada com sucesso. Boa sorte!
            </h1>
            <h4 className="mt-4">
              O número da reserva é #{location.state.response.id}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              <div
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                <h5 className="mb-4">Parceiro responsável:</h5>

                <div className="row">
                  <div className="col-md-12">
                    <p className="mb-1 text-uppercase">
                      {location.state.response.partner.name}
                    </p>
                    <p>
                      Telefone: 
                      <a
                        href={`https://wa.me/55${PHONE_CLEANER(
                          location.state.response.partner.phone
                        )}`}
                      > 
                         {location.state.response.partner.phone} 
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                <h5 className="mb-4">Reserva feita para:</h5>

                <div className="row">
                  <div className="col-md-12">
                    <p className="mb-1 text-uppercase">
                      {location.state.response.buyer.name} (CPF:{" "}
                      {location.state.response.buyer.document})
                    </p>
                    <p>
                      Telefone:{" "}
                      <a
                        href={`https://wa.me/55${location.state.response.buyer.phone}?text=Sua reserva foi confirmada!`}
                      >
                        {location.state.response.buyer.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="list-group-item list-group-item-action">
                <h5 className="mb-1">Números selecionados:</h5>
                {location.state.response.tickets.map((i: TNumber) => (
                  <span key={i.id} className="badge bg-success m-1">
                    {i.number}
                  </span>
                ))}
                <h5 className="mt-3 my-0"> Total: R$ {location.state.response.tickets.length * 50.0},00 </h5>
                <h5 className="mt-3 my-0 text-success"> Sua comissão: R$ {location.state.response.tickets.length * 20.0},00 </h5>
                <h5 className="mt-3 my-0 text-primary"> A ser transferido: R$ {location.state.response.tickets.length * 30.0},00 </h5>
                <h5 className="mt-4">PIX (CNPJ): 07351711000150 <br/><small>LOJA MACONICA LAURO SODRE</small></h5>
              </div>
            </ul>

            <div className="alert alert-warning mt-4">
              ATENÇÃO: Envie o comprovante de pagamento para o parceiro
              responsável! Os números ficam reservados por até 48h aguardando a
              confirmação do pagamento, após esse período são disponibilizados
              novamente, caso não haja a confirmação.
            </div>

            <div className="my-4">
              <Link
                className="btn btn-primary btn-lg"
                to={`/partner/${location.state.response.partner.code}`}
              >
                Voltar para tela inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
