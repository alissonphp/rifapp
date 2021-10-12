import Datatable from "components/Datatable";
import Navbar from "components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Datatable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
