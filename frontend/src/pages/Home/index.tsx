import Footer from "components/Footer";
import Infos from "components/Infos";
import NavBar from "components/NavBar";
import Slides from "components/Slides";
import {useParams} from "react-router";

const Home = () => {

    let {code}: any = useParams();

    return (
        <>
            <NavBar/>
            <Slides/>
            <Infos partner={code}/>
            <Footer/>
        </>
    );
};

export default Home;
