import ContactForm from "../../../Bonus/ContactUs/ContactForm";
import CustomerSays from "../../../Bonus/CustomerSays/CustomerSays";
import TopRated from "../../../Bonus/TopRated/TopRated";
import ShopByAge from "../../../Bonus/YoutubeVideo/ShopByAge/ShopByAge";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../../Banner/Banner";
import Gallery2 from "../../Gallery/Gallery2";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    useTitle('PopToy | Home');
    return (
        <div>
            <Banner></Banner>
            <Gallery2></Gallery2>
            <ShopCategory></ShopCategory>
            <ShopByAge></ShopByAge>
            <TopRated></TopRated>
            <CustomerSays></CustomerSays>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;