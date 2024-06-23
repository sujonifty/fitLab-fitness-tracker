import feature1 from "../../../../src/assets/features/f1.png"
import feature2 from "../../../../src/assets/features/f2.png"
import feature3 from "../../../../src/assets/features/f3.png"
import feature4 from "../../../../src/assets/features/f4.png"
import feature5 from "../../../../src/assets/features/f5.png"
import feature6 from "../../../../src/assets/features/f6.png"
const Feature = () => {
    return (
        <section className="m-4 md:m-8  ">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Built to Empower Every Team</h2>
                <p className="text-base-content">Unlock your full potential with our comprehensive fitness programs.</p>
            </div>
            <div className="container mx-auto grid justify-center bg-gray-50 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4 border-b-2 border-r-2 ">
                    <img src={feature1} alt="featureImg"  className="h-20 w-20 object-cover" />
                    <h3 className="my-3 text-3xl font-semibold">Body Building</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Achieve your goals</p>
                        <p>Expert guidance</p>
                        <p>Comprehensive training </p>                    
                        </div>
                </div>

                <div className="flex flex-col items-center p-4 border-b-2 border-r-2">
                    <img src={feature2} alt="featureImg"  className="h-20 w-20 object-cover" />
                    <h3 className="my-3 text-3xl font-semibold">Classic Yoga</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Experience tranquility</p>
                        <p>Improve your flexibility</p>
                        <p>Achieve your goals </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4 border-b-2 border-r-2">
                    <img src={feature3} alt="featureImg"  className="h-20 w-20 object-cover" />
                    <h3 className="my-3 text-3xl font-semibold">Musculation</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Build strength and muscle</p>
                        <p>Improve muscle mass</p>
                        <p>Targeted musculation </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4 border-b-2 border-r-2">
                    <img src={feature4} alt="featureImg"  className="h-20 w-20 object-cover"  />
                    <h3 className="my-3 text-3xl font-semibold">Weight Lifting</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Enhance your power</p>
                        <p>Improve weight lifting</p>
                        <p>Achieve technique </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4 border-b-2 border-r-2">
                    <img src={feature5} alt="featureImg"  className="h-20 w-20 object-cover" />
                    <h3 className="my-3 text-3xl font-semibold">Fitness Running</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Improve your endurance</p>
                        <p>Achieve cardiovascular health </p>
                        <p>With expert guided</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4 border-b-2 border-r-2">
                    <img src={feature6} alt="featureImg"  className="h-20 w-20 object-cover" />
                    <h3 className="my-3 text-3xl font-semibold">CrossFit</h3>
                    <div className="space-y-1 leading-tight">
                        <p>comprehensive training</p>
                        <p>High-intensity functional </p>
                        <p>Join our community</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Feature;