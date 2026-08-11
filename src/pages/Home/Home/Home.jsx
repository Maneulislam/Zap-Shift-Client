import HowWorks from "../../../components/HowWorks/HowWorks";
import OurServices from "../../../components/OurServices/OurServices";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";
import VerticalLine from "../VerticalLine/VerticalLine";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <VerticalLine></VerticalLine>
            <CustomerSatisfaction></CustomerSatisfaction>
        </div>
    );
};

export default Home;