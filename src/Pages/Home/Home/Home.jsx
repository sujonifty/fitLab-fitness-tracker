import Banner from "../Banner/Banner";
import Newsletter from "../Newsletter/Newsletter";
import RecentPost from "../RecentPost/RecentPost";

const Home = () => {
    return (
        <div>
            <div className="lg:mb-48 ">
            <Banner></Banner>
            </div>
            <div className="mt-48">
            <Newsletter></Newsletter>
            </div>
            <div>
                <RecentPost></RecentPost>
            </div>
        </div>
    );
};

export default Home;