import About from "../About/About";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import RecentPost from "../RecentPost/RecentPost";

const Home = () => {
    return (
        <div>
            <div className="lg:mb-48 ">
            <Banner></Banner>
            </div>
            <div className="mb-32">
                <Feature></Feature>
            </div>
            <div className="mb-32">
                <About></About>
            </div>
            <div className="mb-32">
                <RecentPost></RecentPost>
            </div>
        </div>
    );
};

export default Home;