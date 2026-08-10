import HowWorks from "../../../components/HowWorks/HowWorks";
import OurServices from "../../../components/OurServices/OurServices";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <OurServices></OurServices>
            <Brands></Brands>
        </div>
    );
};

export default Home;