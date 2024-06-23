

const About = () => {
    return (
        <section className=" py-16">
            <div className="container mx-auto p-4 space-y-2 text-center">
                <h2 className="text-5xl font-bold">About Us</h2>
                <p className="text-base-content w-9/12 mx-auto mb-16">
                    Welcome to FitLab, where we strive to offer the best
                    training and classes to help you achieve your fitness goals. Our team
                    of experienced trainers is dedicated to providing personalized
                    guidance and support to ensure you get the most out of your workouts.
                </p>
            </div>
            <div className="container bg-gray-50 py-10 mx-auto px-6 text-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            Our mission is to create a supportive and inclusive community
                            where everyone can improve their fitness and well-being. We offer
                            a variety of classes and training programs tailored to meet the
                            needs of all fitness levels.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            We envision a world where everyone has access to the resources and
                            support they need to live a healthy and active lifestyle. We are
                            committed to continuously improving our services to meet the
                            evolving needs of our members.
                        </p>
                    </div>
                    <div className="p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
                        <ul className="text-gray-600 list-disc list-inside">
                            <li>Excellence in service</li>
                            <li>Inclusivity and diversity</li>
                            <li>Community and support</li>
                            <li>Continuous improvement</li>
                            <li>Passion for fitness</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;