import { useHistory, useLocation } from "react-router";

const Confirmation = () => {
    const location: any = useLocation();
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Confirmação de reserva</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirmation;