import { Field, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router";
import { TNumber } from "types/Number";
import axios from "axios";
import { BASE_URL } from "utils/requests";

const ReserveForm = () => {
  const location: any = useLocation();
  const history: any = useHistory();
  return (
    <>
      <h1>Reserve seus números:</h1>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            <div
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <h5 className="mb-4">Parceiro responsável:</h5>

              <div className="row">
                {location.state.partner.photo_url && (
                  <div className="col-md-2">
                    <img
                      className="avatar"
                      src={location.state.partner.photo_url}
                      alt={location.state.partner.name}
                    />
                  </div>
                )}
                <div className="col-md-10">
                  <p className="mb-1 text-uppercase">
                    {location.state.partner.name}
                  </p>
                  <p>Telefone: {location.state.partner.phone}</p>
                </div>
              </div>
            </div>
            <div className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Números selecionados:</h5>
              </div>
              {location.state.selecteds.map((i: TNumber) => (
                <span key={i.id} className="badge bg-success m-1">
                  {i.number}
                </span>
              ))}
              <p className="mt-3 my-0">
                Total: R$ {location.state.selecteds.length * 50.0},00
              </p>
            </div>
          </ul>
        </div>
      </div>
      <Formik
        initialValues={{ name: "", email: "", phone: "", document: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const data = {
              buyer: values,
              partner: location.state.partner,
              tickets: location.state.selecteds,
            };
            axios
              .post(`${BASE_URL}/reserves`, data)
              .then((res) => {
                history.push({
                    pathname: '/success',
                    state: { response: res.data }
                })
              })
              .catch((err) => {
                console.error(err);
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="document">CPF (somente números):</label>
              <Field
                type="text"
                name="document"
                placeholder="12345678900"
                value={values.document}
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="name">Seu nome:</label>
              <Field
                type="text"
                name="name"
                placeholder="João Carlos Pereira"
                value={values.name}
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="email">E-mail:</label>
              <Field
                type="email"
                name="email"
                placeholder="joao.carlos@gmail.com"
                value={values.email}
                className="form-control"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Telefone: (whatsapp)</label>
              <Field
                type="tel"
                name="phone"
                placeholder="(98) 98154-6987"
                value={values.phone}
                className="form-control"
              />
            </div>
            <div className="d-grid gap-2 mt-4 mb-4">
              <button
                type="submit"
                className="btn btn-lg btn-primary"
                disabled={isSubmitting}
              >
                Reservar
                <FontAwesomeIcon className="mx-2" icon={faCheck} />
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ReserveForm;
