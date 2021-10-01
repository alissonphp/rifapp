import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

import Numbers from "components/Numbers";

type InfosProps = {
    partner: string;
};

const Infos = (props: InfosProps) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 p-5">
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <h1>
                                Quadro com pintura a óleo, simbologia representativa de
                                80x120cm, com moldura de cobre.
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <div
                                    className="list-group-item list-group-item-action"
                                    aria-current="true"
                                >
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Valor do número</h5>
                                        <small>
                                            <a href="/">PIX: 65321154000154 (CNPJ)</a>
                                        </small>
                                    </div>
                                    <p className="mb-1">R$ 50,00</p>
                                </div>
                                <div className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Data do sorteio</h5>
                                        <small className="text-muted">Previsão</small>
                                    </div>
                                    <p className="mb-1">15 de outubro de 2021</p>
                                </div>

                                <div className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Oferecido por</h5>
                                        <small className="text-muted">
                                            <FontAwesomeIcon icon={faWhatsapp} size="2x"/> (98)
                                            98887-7444
                                        </small>
                                    </div>
                                    <p className="mb-1">ARLS Lauro Sodré N 03</p>
                                </div>

                                <div className="list-group-item list-group-item-action">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Mais informações</h5>
                                    </div>
                                    <p className="mb-1">Ver o regulamento do sorteio</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-12">
                    <Numbers partner={props.partner}/>
                </div>
            </div>
        </div>
    );
};

export default Infos;
