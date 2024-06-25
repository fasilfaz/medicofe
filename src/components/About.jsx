import img1 from "../assets/BG1.png";
import img2 from "../assets/BG2.png";
import img3 from "../assets/BG3.png";
import img4 from "../assets/BG4.png";
import img5 from "../assets/BG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHospital,
  faStethoscope,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-center text-color mb-10">
          About Us
        </h1>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-color mb-4 flex items-center">
              <FontAwesomeIcon icon={faHospital} className="mr-2" /> Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Medico Hospital, our vision is to be the leading healthcare
              provider, offering exceptional medical care through a commitment
              to excellence, compassion, and innovation. We strive to create a
              healthier future for our community by setting the standard in
              medical practice and patient care.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-color mb-4 flex items-center">
              <FontAwesomeIcon icon={faStethoscope} className="mr-2" /> Our
              Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to deliver high-quality, patient-centered
              healthcare services with integrity and respect. We are dedicated
              to improving the well-being of our patients by providing
              comprehensive medical care, fostering a culture of continuous
              improvement, and maintaining a compassionate approach in all that
              we do. Our team of skilled professionals is committed to ensuring
              the best possible outcomes for every patient.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-semibold text-center text-color mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-teal-100 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faHeartbeat}
                className="mr-2 text-color text-4xl mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Compassion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We treat everyone with kindness and empathy.
              </p>
            </div>
            <div className="p-6 bg-teal-100 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faStethoscope}
                className="mr-2 text-color text-4xl mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest standards in everything we do.
              </p>
            </div>
            <div className="p-6 bg-teal-100 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faHospital}
                className="mr-2 text-color text-4xl mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace change and continuously seek better ways to serve our
                patients.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-semibold text-center text-color mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Example team member */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={img1}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-color">
                Dr. Jane Smith
              </h3>
              <p className="text-gray-600">Chief Medical Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={img2}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-color">
                Dr. Michael Brown
              </h3>
              <p className="text-gray-600">Sr. Orthopedic Surgeon</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={img3}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-color">
                Dr. Sarah Davis
              </h3>
              <p className="text-gray-600">Sr. Pediatrician</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={img4}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-color">
                Dr. Robert Wilson
              </h3>
              <p className="text-gray-600">Sr. Neurologist</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={img5}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-color">
                Dr. Laura Martinez
              </h3>
              <p className="text-gray-600">Sr. Dermatologist</p>
            </div>
            {/* Add more team members similarly */}
            {/* "https://via.placeholder.com/150" */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
