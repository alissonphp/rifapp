import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Numbers from "components/Numbers";

type InfosProps = {
  partner: string;
};

const Infos = (props: InfosProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 p-5">
          <div className="row mb-4">
            <div className="col-md-12">
              <h1>Sorteio "Entre Irmãos"</h1>
              <h4>
                Quadro intitulado "Símbolos Maçônicos", já emoldurado, medindo 0,80m de largura
                e 1,20m de altura, pintado em tela a óleo pelo artista plástico
                Valdemar Barros, ludovicense, professor de pintura do Centro de
                Cultura Odílo Costa Filho em São Luís, que possui diversas obras
                no Maranhão e em outros estados brasileiros.
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-4">
              <ul className="list-group">
                <div
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Valor do número</h5>
                    <small>
                      <a href="/">PIX: 07351711000150 (CNPJ)</a>
                    </small>
                  </div>
                  <p className="mb-1">R$ 50,00</p>
                </div>
                <div className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Data do sorteio</h5>
                    <small className="text-muted">às 20h00</small>
                  </div>
                  <p className="mb-1">11 de dezembro de 2021</p>
                </div>

                <div className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Oferecido por</h5>
                    <small className="text-muted">
                    <a href="https://wa.me/5598981105977?text=Gostaria de mais informações sobre Sorteio Entre Irmãos"><FontAwesomeIcon icon={faWhatsapp}/> (98)
                      98110-5977</a>
                    </small>
                  </div>
                  <p className="mb-1">ARLS Lauro Sodré N 03</p>
                </div>

                <div className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Regulamento</h5>
                  </div>
                  <div className="mb-1">
                      <ul>
                          <li>A venda dos bilhetes será por meio digital, utilizando essa plataforma e o Whatsapp para comunicações.</li>
                          <li>Os pagamentos devem ser feitos utilizando o PIX do ofertante: 07351711000150 (CNPJ)</li>
                          <li>O valor de R$ 50,00 será dividido da seguinte forma:
                              <ul>
                                  <li>R$ 30,00 (trinta reais) destinados às obras sociais da ARLS Lauro Sodré Nº 03;</li>
                                  <li>R$ 20,00 (vinte reais) para o parceiro que realizar a venda.</li>
                              </ul>
                          </li>
                          <li>O parceiro interessado deve solicitar o cadastro na plataforma para que seja gerado o link dedicado a ele; a solicitação deve ser feita pelo whatsapp <a href="https://wa.me/5598981105977?text=Quero me cadastrar como parceiro do Sorteio Entre Irmãos">(98) 98110-5977 (Dirceu Carlos Brasileiro)</a></li>
                          <li>O sorteio será realizado utilizando o "o globo" com bolas numeradas de 0 a 9, onde serão selecionadas 3 de forma a compor o número sorteado.</li>
                      </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <Numbers partner={props.partner} />
        </div>
      </div>
    </div>
  );
};

export default Infos;
