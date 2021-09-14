import Footer from "components/Footer";
import Infos from "components/Infos";
import NavBar from "components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">home page</div>
        </div>
      </div>
      <Infos />
      <Footer />
    </>
  );
};

export default Home;
