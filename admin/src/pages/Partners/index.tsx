import Navbar from "components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Partner } from "types/Reserve";
import { Link } from "react-router-dom";

const Partners = () => {
  const [data, setData] = useState<Partner[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/partners`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1>Parceiros</h1>
          </div>
        </div>
        <div className="row my-4">
            <div className="col-md-12">
                <Link to="/partners/create" className="btn btn-outline-primary">Novo parceiro</Link>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Link</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {data.map((p: Partner) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>
                      https://rifaapp-laurosodre03.netlify.app/partner/{p.code}
                    </td>
                    <td>
                      <a href={`https://wa.me/${p.phone}`}>{p.phone}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
