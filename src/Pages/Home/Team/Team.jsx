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
            <div className="container flex flex-col justify-center p-4 mx-auto">
                <h2 className="text-5xl font-bold">TEAM OF EXPERT COACHES</h2>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    {
                        teams.map(team =>
                            <div key={team._id}>
                                <div className="relative">
                                    <img className="object-cover w-full bg-gray-500 aspect-square" src={team.photo} />

                                </div>                                
                                <div className="absolute -mt-20">
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