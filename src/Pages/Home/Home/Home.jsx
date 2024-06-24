import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import FeatureClass from "../FeatureClass/FeatureClass";
import RecentPost from "../RecentPost/RecentPost";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FitLab | Home</title>
            </Helmet>
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
            <div className="container mb-16 mx-auto p-4 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Most booking feature classes </h2>
                <p className="text-base-content w-10/12 mx-auto">
                Most booking feature classes are the highly attractive and sought-after sessions offered by fitness and wellness centers. These classes are popular due to their engaging formats, expert instruction, and targeted fitness goals, drawing participants eager to achieve specific health objectives such as strength building, cardiovascular fitness, flexibility, and overall wellness. Their popularity often results in high demand, prompting early reservations to ensure participation in these dynamic and effective workout experiences
                </p>
            </div>
                <FeatureClass></FeatureClass>
            </div>
            <div className="mb-32">
                <RecentPost></RecentPost>
            </div>
            <div className="mb-32">
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;