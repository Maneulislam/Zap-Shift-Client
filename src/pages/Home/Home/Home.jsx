import HowWorks from "../../../components/HowWorks/HowWorks";
import OurServices from "../../../components/OurServices/OurServices";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import CustomerSatisfaction from "../CustomerSatisfaction/CustomerSatisfaction";
import FAQ from "../FAQ/FAQ";
import Reviews from "../Reviews/Reviews";
import VerticalLine from "../VerticalLine/VerticalLine";


const reviewsPromise = fetch('reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <VerticalLine></VerticalLine>
            <CustomerSatisfaction></CustomerSatisfaction>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;