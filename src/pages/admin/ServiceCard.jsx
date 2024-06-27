import { faTrash, faPlus, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const backendUrl = 'https://medicoba.onrender.com';



const ServiceCard = () => {
    const [ services, setServices] = useState([]);
    

    useEffect(() => {
        const getAllServices = async () => {
            try {
                const res = await axios.get(
                    `${backendUrl}/api/v1/admin/get-services`,
                    // "http://localhost:3000/api/v1/admin/get-services",
                );
                const data = await res.data;
                setServices(data);
            } catch (error) {
                console.error(error);
            }
        };
        getAllServices();
    },[]);


    return (

        <section className="p-20 bg-gray-100">
            <div className="container">
                <h2 className="text-3xl font-bold text-center text-color mb-4">Services we provide</h2>
                <p className="text-center text-gray-600 mb-8">At our medical center, we are committed to offering a comprehensive range of healthcare services designed to meet the diverse needs of our patients. 
                Our goal is to provide high-quality,
                 personalized care to ensure the best possible outcomes. Here is an overview of the key services we provide.</p>
                <div className='flex justify-center items-center'>
                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services &&
                   services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden w-[380px]">
                      <img src={service.image} alt={service.title} className=" m-4" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-color">{service.title}</h3>
                        <p className="text-gray-600 my-2 text-sm">{service.description}</p>
                      </div>
                        <div className="flex flex-row justify-center pb-2">
                        <div>
                            <Link to="/admin/services-add">
                            <button className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3">
                            <FontAwesomeIcon icon={ faPlus } className="" />
                              
                            </button>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/admin/services-update/${service._id}`}>
                            <button className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3">
                            <FontAwesomeIcon icon={ faPen} className=""  />
                              
                            </button>
                            </Link>
                            
                        </div>
                        <button className="bg-color pr-4 pl-4 pt-2 pb-2 rounded-2xl text-white hover:bg-white hover:text-color hover:border-2 hover:border-color m-3"
                            onClick={ async () => {
                            const res = await axios.delete(
                                `${backendUrl}/api/v1/admin/delete-services/${service._id}`,
                            // `http://localhost:3000/api/v1/admin/delete-services/${service._id}`,
                             {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token"),
                                  },
                             }
                               );
                            const data = await res.data;
                           if (data === "Service deleted successfully") {
                                window.location.reload();
                                }
                               console.log(data);
                           }}>
                            <FontAwesomeIcon icon={ faTrash } className="" />
                            
                        </button >
                        </div>
                    </div>
                  ))}
                </div>
                </div>
                
            </div>
        </section>
       
    )
}

export default ServiceCard;