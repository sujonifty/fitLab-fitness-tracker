
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddClass = () => {
const axiosSecure= useAxiosSecure()
    const handleAddClass=(e)=>{
        e.preventDefault();
        const className =e.target.className.value;
        const title =e.target.title.value;
        const description =e.target.description.value;
        const photo =e.target.photo.value;
        const date =e.target.date.value;
        const tag =e.target.tag.value;
        const classInfo={className, title, description, photo, date, tag};
        console.log(classInfo);
        axiosSecure.post('/addClasses', classInfo)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Class added Successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        })
        .catch(error => {
            if (error.message) {
                console.log(error.message);
            }

        })
    }
    return (
        // < section className="py-4" >
        //     <div className="max-w-4xl p-6 mx-auto bg-base-100 rounded-md shadow-md dark:bg-gray-800">
        //         <h2 className="text-lg text-center my-4 font-semibold text-base-content capitalize dark:text-white">Applicant Information</h2>
        //         <form onSubmit={handleAddClass}>
        //             <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        //                 <div>
        //                     <label className="text-base-content " >Class Name</label>
        //                     <input name="className" required type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
        //                 </div>
        //                 <div>
        //                     <label className="text-base-content " >Class Title</label>
        //                     <input name="title" required type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
        //                 </div>
        //                 <div>
        //                     <label className="text-base-content " >Description</label>
        //                     <input name="description" required type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
        //                 </div>

        //                 <div>
        //                     <label className="text-base-content " >Image</label>
        //                     <input required name="photo" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
        //                 </div>
        //                 <div>
        //                     <label className="text-base-content " >Date</label>
        //                     <input required name="date" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
        //                 </div>
        //                 <div>
        //                     <label className="text-base-content " >Tag</label>
        //                     <input required name="tag" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
        //                 </div>

        //             </div>

        //             <div className="flex justify-center mt-6">
        //                 <input type="submit" value="Add Class" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
        //             </div>
        //         </form>

        //     </div>
        // </section >

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6R9G2kM/add-Class-Bg.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Add New Class.</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddClass}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-base-content " >Class Name</label>
                                    <input name="className" required type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-base-content " >Class Title</label>
                                    <input name="title" required type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-base-content " >Description</label>
                                    <input name="description" required type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-base-content " >Image</label>
                                    <input required name="photo" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-base-content " >Date</label>
                                    <input required name="date" type="date" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-base-content " >Tag</label>
                                    <input required name="tag" type="text" className="block w-full px-4 py-2 mt-2 text-base-content bg-base-100 border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                                </div>

                            </div>

                            <div className="flex justify-center mt-6">
                                <input type="submit" value="Add Class" className="font-bold px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;

