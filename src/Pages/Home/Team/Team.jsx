import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Team = () => {
    const axiosPublic = useAxiosPublic();
    const { data: teams = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trainers');
            return res.data;
        }
    })
    // console.log(teams)
    return (
        <section className="py-6 bg-gray-50">
            <div className="container mx-auto p-4  space-y-2 text-center">
                <h2 className="text-5xl font-bold">Team of Expert Coaches</h2>
                <p className="text-base-content w-10/12 mx-auto">A "Team of Expert Coaches" refers to a group of highly skilled professionals specializing in guiding individuals through their fitness journeys. These coaches offer personalized training plans, expert advice, and motivation to help clients achieve their health and fitness goals effectively. They bring diverse expertise in areas like strength training, nutrition, endurance, and overall wellness, ensuring tailored support for each client's unique needs and aspirations.</p>
            </div>
            <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        teams.map(team =>
                            <div key={team._id}>
                                <div className="relative">
                                    <img className="object-cover w-full bg-gray-500 aspect-square rounded-xl shadow-xl" src={team.photo} />

                                </div>                                
                                <div className="absolute text-xl text-white font-semibold ml-5 -mt-20">
                                    <h3>Trainer: {team.name}</h3>
                                    <h3>email: {team.email}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;