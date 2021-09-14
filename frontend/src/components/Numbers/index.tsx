import Number from "components/Number";
import { useEffect, useState } from "react";

const Numbers = () => {
  let rows: any[] = [];
  for (let index = 0; index < 1000; index++) {
    rows.push(index);
  }
  const [items, setItems] = useState<any[]>(rows);
  const [filteredItems, setFilteredItems] = useState<any[]>(rows);
  const [selectNumbers, setSelectNumbers] = useState<string[]>([]);
  const [filter, setFilter] = useState<any>("");

  const selectItem = (num: string) => {
    setSelectNumbers(() => [...selectNumbers, num]);
  };

  useEffect(() => {
    if (filter !== "") {
      setFilteredItems(
        items.filter((item: any) => {
          return item === parseInt(filter);
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
        {filteredItems.map((item) => (
          <Number key={item} num={item} onNumberSelected={selectItem} />
        ))}
      </div>
      {selectNumbers.length > 0 && (
        <div className="selecteds p-4">
          <p>Números selecionados: </p>
          {selectNumbers.map((i) => (
            <span key={i} className="badge bg-success m-1 p-2">
              {i}
            </span>
          ))}
          <p className="mt-3 mb-0">
            Total da compra: R$ {selectNumbers.length * 50.0},00
          </p>
          <div className="d-grid gap-2">
            <a href="/" className="btn btn-outline-success btn-lg mt-3">
              Reservar {selectNumbers.length > 1 ? "números" : "número"}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Numbers;
