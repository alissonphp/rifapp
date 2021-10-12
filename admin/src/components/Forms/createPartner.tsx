import { Field, FieldProps, Formik, FormikValues } from "formik";
import { BASE_URL } from "utils/requests";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import axios from "axios";
import { STRING_CLEANER } from "utils/cleaner";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Nome deve ter pelo menos 6 caracteres")
    .required("Obrigatório"),
  phone: Yup.string()
    .length(15, "Telefone deve conter 11 dígitos")
    .required("Obrigatório"),
  code: Yup.string()
    .min(5, "O código deve conter pelo menos 5 dígitos")
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

const CreatePartnerForm = () => {
  const history: any = useHistory();
  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ name: "", code: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const data = {
              ...values,
              phone: STRING_CLEANER(values.phone),
            };
            axios
              .post(`${BASE_URL}/partners`, data)
              .then((res) => {
                toast.success(`Parceiro ${data.name} cadastro com sucesso!`, {
                  autoClose: 3000,
                });
                setTimeout(() => {
                  history.push({
                    pathname: "/partners",
                    state: { message: "confirmed" },
                  });
                }, 3000);
              })
              .catch((err) => {
                toast.error(`Cadastro não realizado! Verifique se o código do link já está cadastrado com outro parceiro`, {
                  autoClose: 5000,
                });
                console.error(err);
              });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="name">Nome do parceiro:</label>
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
              <label htmlFor="code">Código do link:</label>
              <Field
                type="text"
                name="code"
                placeholder="joaocarlos"
                value={values.code}
                className="form-control"
              />
              {errors.code && touched.code ? (
                <div className="alert alert-danger">{errors.code}</div>
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
                Cadastrar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CreatePartnerForm;
