import { useHistory, useLocation } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import ReserveDetails from "components/ReserveDetails";
import { BASE_URL } from "utils/requests";

const Confirmation = () => {
  const location: any = useLocation();
  const history: any = useHistory();

  const confirm = (id: number, status: boolean) => {
    axios
      .post(`${BASE_URL}/reserves/confirm`, { id, confirmed: status })
      .then((res) => {
        toast.success(`Reserva #${id} atualizada com sucesso!`, {
          autoClose: 3000,
        });
        setTimeout(() => {
          history.push({
            pathname: "/",
            state: { message: "confirmed" },
          });
        }, 3000);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ToastContainer />
            <ReserveDetails data={location.state.reserve} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button
              onClick={() => confirm(location.state.reserve.id, true)}
              className="btn btn-success"
            >
              Confirmar pagamento
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
