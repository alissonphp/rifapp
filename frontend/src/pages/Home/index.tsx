import Footer from "components/Footer";
import Infos from "components/Infos";
import NavBar from "components/NavBar";
import Slides from "components/Slides";
import { useParams } from "react-router";

const Home = () => {

  let { code }: any = useParams();

  return (
    <>
      <NavBar />
      <Slides />
      <div className="container">
        <div className="row">
          <div className="col-md-12">Código do parceiro {code} </div>
        </div>
      </div>
      <Infos />
      <Footer />
    </>
  );
};

export default Home;
