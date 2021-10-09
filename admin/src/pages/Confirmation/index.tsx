import { useHistory, useLocation } from "react-router";
import ReserveDetails from "components/ReserveDetails";

const Confirmation = () => {
  const location: any = useLocation();
  const history: any = useHistory();

  const confirm = (id: number, status: boolean) => {
    console.log(id, status);
    history.push({
      pathname: "/",
      state: { message: "confirmed" },
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
