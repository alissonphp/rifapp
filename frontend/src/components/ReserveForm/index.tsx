import { Field, FieldProps, Formik, FormikValues } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router";
import { TNumber } from "types/Number";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import { PHONE_CLEANER } from "utils/transform";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Nome deve ter pelo menos 6 caracteres")
    .required("Obrigatório"),
  email: Yup.string().email("E-mail inválido"),
  phone: Yup.string()
    .length(15, "Telefone deve conter 11 dígitos")
    .required("Obrigatório"),
  document: Yup.string()
    .length(14, "CPF deve conter 11 dígitos")
    .required("Obrigatório"),
});

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const documentMask = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

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
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const data = {
              buyer: {
                ...values,
                document: PHONE_CLEANER(values.document),
                phone: PHONE_CLEANER(values.phone),
              },
              partner: location.state.partner,
              tickets: location.state.selecteds,
            };
            axios
              .post(`${BASE_URL}/reserves`, data)
              .then((res) => {
                history.push({
                  pathname: "/success",
                  state: { response: res.data },
                });
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
              <label htmlFor="document">CPF:</label>
              <Field
                name="document"
                render={({ field }: FieldProps<FormikValues>) => {
                  return (
                    <MaskedInput
                      {...field}
                      mask={documentMask}
                      id="document"
                      value={values.document}
                      placeholder="123.456.789-99"
                      className="form-control"
                      type="tel"
                    />
                  );
                }}
              />
              {errors.document && touched.document ? (
                <div className="alert alert-danger">{errors.document}</div>
              ) : null}
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
              {errors.name && touched.name ? (
                <div className="alert alert-danger">{errors.name}</div>
              ) : null}
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
              {errors.email && touched.email ? (
                <div className="alert alert-danger">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Telefone: (whatsapp)</label>
              <Field
                name="phone"
                render={({ field }: FieldProps<FormikValues>) => {
                  return (
                    <MaskedInput
                      {...field}
                      mask={phoneNumberMask}
                      id="phone"
                      value={values.phone}
                      placeholder="(98) 98745-9874"
                      className="form-control"
                      type="tel"
                    />
                  );
                }}
              />
              {errors.phone && touched.phone ? (
                <div className="alert alert-danger">{errors.phone}</div>
              ) : null}
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
