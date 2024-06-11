import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Button, Drawer, Label, TextInput, Textarea } from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";

const UserProfile = () => {
  const { user } = useContext(AuthContext)
  const axiosSecure = useAxiosSecure();
  const { data: member = [] } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/member/?email=${user.email}`);
      return res.data;
    }
  })
  console.log(member)
  const bgImg = { backgroundImage: `url(${member.photo})` };
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (

    <div>
      <div className="flex min-h-screen pt-20 md:pt-0">
        <div className="flex flex-col max-w-4xl w-full relative z-20 mx-auto p-8 bg-white rounded-2xl shadow-lg md:max-w-md md:p-0 md:rounded-none">
          <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 theme-orange:from-pink-500 theme-orange:to-orange-400 theme-purple:from-purple-800 theme-purple:to-purple-600 theme-green:from-green-600 theme-green:to-green-500 theme-blue:from-blue-500 theme-blue:to-teal-400">
            <div className="w-48 h-48 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-center bg-cover rounded-full shadow-lg md:w-44 md:h-44 md:border-4 md:border-white md:shadow-none"
              style={bgImg}></div>

            <div className="hidden h-48 relative overflow-hidden md:block">
              <span className="absolute w-20 h-20 top-0 left-0 bg-white opacity-30 rounded-full"></span>
              <span className="absolute w-32 h-32 top-1/4 left-1/4 bg-white opacity-10 rounded-full"></span>
              <span className="absolute w-12 h-12 top-1/6 right-1 bg-white opacity-10 rounded-full"></span>
              <span className="absolute w-24 h-24 top-1/3 right-1/6 bg-white opacity-20 rounded-full"></span>
              <span className="absolute w-16 h-16 top-3/4 left-0 bg-white opacity-10 rounded-full"></span>
            </div>
          </div>
          <div className="flex justify-between p-1 md:py-3 md:px-8">
            <a href="#" className="flex items-center justify-center h-12 p-1 rounded-full text-pink-500 hover:bg-blue-500 hover:text-white theme-orange:text-pink-500 theme-orange:hover:bg-pink-500 theme-purple:text-purple-800 theme-purple:hover:bg-purple-800 theme-green:text-green-600 theme-green:hover:bg-green-600 theme-blue:text-blue-500 theme-blue:hover:bg-blue-500 md:p-2 md:h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 mr-1 md:mr-0">
                <path fill="currentColor" d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"></path>
                <path fill="currentColor" d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"></path>
              </svg>
              <span className="hidden md:inline">Connect</span>
            </a>
            <a href="#" className="flex items-center justify-center h-12 p-1 rounded-full text-purple-400 hover:bg-blue-500 hover:text-white theme-orange:text-orange-400 theme-orange:hover:bg-orange-400 theme-purple:text-fuchsia-400 theme-purple:hover:bg-fuchsia-400 theme-green:text-green-500 theme-green:hover:bg-green-500 theme-blue:text-teal-400 theme-blue:hover:bg-teal-400 md:p-2 md:h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-8 mr-1 md:mr-0">
                <path fill="currentColor" d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"></path>
                <path fill="currentColor" d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"></path>
              </svg>
              <span className="hidden md:inline">Message</span>
            </a>
          </div>
          <div className="text-center order-1 mt-20 md:mt-6">
            <h1 className="mb-1 text-4xl md:text-2xl">{member.name}</h1>
            <span className="text-lg md:text-base">Savar, Dhaka, Bangladesh</span>
          </div>
          <div className="text-center order-2 mt-10 md:mt-6 md:order-3">
            <p className="mb-1 text-lg md:text-base">Web Producer - Web Specialist</p>
            <p className="mb-1 text-lg md:text-base">Bangladesh University, Dhaka</p>
          </div>
          <ul className="flex justify-center mt-8 list-none order-3 md:mt-6 md:order-2">
            <li className="px-6 text-center text-base md:px-4 md:text-sm">
              <span className="block mb-1 font-bold text-2xl md:text-lg">2</span>
              Trainers
            </li>
            <li className="px-6 text-center text-base md:px-4 md:text-sm">
              <span className="block mb-1 font-bold text-2xl md:text-lg">3</span>
              Reviews
            </li>
            <li className="px-6 text-center text-base md:px-4 md:text-sm">
              <span className="block mb-1 font-bold text-2xl md:text-lg">11</span>
              Votes
            </li>
          </ul>
          <div className="text-center my-12 md:my-6 order-4">
            <div className="flex  items-center justify-center">
              <Button onClick={() => setIsOpen(true)}>Update Info</Button>
            </div>
          </div>
        </div>
      </div>

      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
        <Drawer.Items>
          <form action="#">
            <div className="mb-6">
              <Label className="mb-2 block">
                Name
              </Label>
              <TextInput  name="name" defaultValue={member.name} />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <TextInput id="email" name="email" defaultValue={member.email} type="email" readOnly />
            </div>
            <div className="mb-6 mt-3">
              <Label  className="mb-2 block">
                Your Photo
              </Label>
              <TextInput name="text" defaultValue={member.photo} type="email" />
            </div>

            {/* <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
            </div> */}
            <div className="mb-6">
              <Button type="submit" className="w-full">
                Update
              </Button>
            </div>
            
          </form>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default UserProfile;
