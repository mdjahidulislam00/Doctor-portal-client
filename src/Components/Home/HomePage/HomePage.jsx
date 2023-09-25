import Headers from "../Header/Headers";
import Navbar from "../../ShareComponents/Navbar/Navbar";
import Services from "../Services/Services";
import Testimonial from "../Testmonial/Testimonial";
import BlogPage from "../../BlogPage/BlogPage/BlogPage";
import ContractUsSection from "../Contract Us/ContractUsSection";
import Footer from "../../ShareComponents/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Headers />
            <Services />
            <Testimonial />
            <BlogPage />
            <ContractUsSection />
            <Footer />
        </>
    );
};

export default HomePage;