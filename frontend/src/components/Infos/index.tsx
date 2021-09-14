import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Numbers from "components/Numbers";

const styles = {
  backgroundImage: `url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2566&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  borderRadius: "8px",
};
const Infos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7" style={styles}></div>
        <div className="col-md-5 bg-maroon">
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
                      <a href="/">R$ 20,00 de cashback</a>
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
                      <FontAwesomeIcon icon={faWhatsapp} size="2x" /> (98) 98887-7444
                    </small>
                  </div>
                  <p className="mb-1">ARLS Lauro Sodré N 03</p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <Numbers />
        </div>
      </div>
    </div>
  );
};

export default Infos;
