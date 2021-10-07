import { useEffect, useState } from "react";
import Number from "components/Number";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Partner } from "types/Partner";
import { TNumber } from "types/Number";
import { PHONE_CLEANER } from "utils/transform";

type NumbersProps = {
  partner: string;
};

const Numbers = (props: NumbersProps) => {
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [selectNumbers, setSelectNumbers] = useState<TNumber[]>([]);
  const [filter, setFilter] = useState<any>("");
  const [partner, setPartner] = useState<Partner>();

  const selectItem = (num: TNumber) => {
    setSelectNumbers(() => [...selectNumbers, num]);
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/partners/${props.partner}`).then((res) => {
      setPartner(res.data)
    })
  }, [props.partner])

  useEffect(() => {
    axios.get(`${BASE_URL}/tickets`).then((res) => {
      setItems(res.data);
      setFilteredItems(res.data);
    });
  }, []);

  useEffect(() => {
    if (filter !== "") {
      setFilteredItems(
        items?.filter((item: any) => {
          return item.number === parseInt(filter);
        })
      );
    } else {
      setFilteredItems(items);
    }
  }, [filter, items]);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3 className="mb-3">Números da sorte:</h3>
        </div>
        <div className="col-6 text-right">
          <input
            type="text"
            className="form-control"
            autoFocus={true}
            onChange={(e) => setFilter(e.target?.value)}
            placeholder="Pesquisar número..."
          />
        </div>
      </div>
      <div className="row mb-5">
        {filteredItems?.map((item) => (
          <Number key={item.id} num={item} onNumberSelected={selectItem} />
        ))}
      </div>
      {selectNumbers.length > 0 && (
        <div className="selecteds p-4">
          <p>Números selecionados: </p>
          {selectNumbers.map((i: TNumber) => (
            <span key={i.id} className="badge bg-success m-1 p-2">
              {i.number}
            </span>
          ))}
          <p className="mt-3 mb-0">
            Total da compra:{" "}
            <span className="badge bg-primary">
              R$ {selectNumbers.length * 50.0},00
            </span>
          </p>
          <p>Parceiro: {partner?.name} <a href={`https://wa.me/55${PHONE_CLEANER(partner?.phone)}`}>{partner?.phone}</a></p>
          <div className="d-grid gap-2">
            <Link
              className="btn btn-outline-success btn-lg mt-3"
              to={{
                pathname: "/reserve",
                state: {
                  selecteds: selectNumbers,
                  partner
                },
              }}
            >
              Reservar {selectNumbers.length > 1 ? "números " : "número "}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Numbers;
