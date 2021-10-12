import CreatePartnerForm from "components/Forms/createPartner";
import Navbar from "components/Navbar";

const PartnerCreate = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1>Cadastrar um novo parceiro</h1>
            <CreatePartnerForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCreate;
