import {Field, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from "react-router";
import dirceu from "assets/img/dirceu.jpg";

const ReserveForm = () => {
    const location: any = useLocation();
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
                                <div className="col-md-2">
                                    <img className="avatar" src={dirceu} alt="dirceu"/>
                                </div>
                                <div className="col-md-10">
                                    <p className="mb-1 text-uppercase">
                                        {location.state.partner}
                                    </p>
                                    <p>Telefone: (98) 98110-5977</p>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Números selecionados:</h5>
                            </div>
                            {location.state.selecteds.map((i: string) => (
                                <span key={i} className="badge bg-success m-1">
                  {i}
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
                initialValues={{name: "", email: "", phone: "", cpf: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        const data = {...values, ...location.state};
                        console.log(data);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({values, errors, touched, handleSubmit, isSubmitting}) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-3">
                            <label htmlFor="cpf">CPF (somente números):</label>
                            <Field
                                type="text"
                                name="cpf"
                                placeholder="12345678900"
                                value={values.cpf}
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
                                <FontAwesomeIcon className="mx-2" icon={faCheck}/>
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ReserveForm;
