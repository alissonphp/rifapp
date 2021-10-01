import Footer from "components/Footer";
import NavBar from "components/NavBar";
import ReserveForm from "components/ReserveForm";

const Reserve = (props: any) => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ReserveForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Reserve;
