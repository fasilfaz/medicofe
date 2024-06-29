import axios from "axios";
import { useEffect, useState } from "react";


const backendUrl = 'https://medicoba.onrender.com';

const Services = () => {

    const [ services, setServices] = useState([]);

    useEffect(() => {
        const getAllServices = async () => {
            try {
                const res = await axios.get(
                  // `${backendUrl}/api/v1/admin/get-services`,
                    "http://localhost:3000/api/v1/admin/get-services",
                );
                const data = await res.data;
                setServices(data);
            } catch (error) {
                console.error(error);
            }
        };
        getAllServices();
    },);
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
               
            </div>
          ))}
        </div>
        </div>
        
     </div>
    </section>
  )
}

export default Services