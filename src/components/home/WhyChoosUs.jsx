import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaLightbulb, FaBook, FaUsers, FaBrain } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='pb_bg_ylw w-28 h-28 rounded-full absolute -left-20 top-24 z-10 hidden sm:block'></div> {/* Hide on smaller screens */}
      <div className='pb_bg_red w-36 h-36 rounded-full absolute -left-[87px] top-[79px] scale-125 hidden sm:block'></div> {/* Hide on smaller screens */}
      <div className='pb_bg_ylw w-96 h-96 rounded-full absolute -top-72 right-0 hidden lg:block'></div> {/* Hide on smaller screens and medium screens */}

      <div className='container max-w-7xl px-4 mx-auto my-10'>
        <h4 className='text-center font-bold  text-[30px]'>Why choose us</h4>
        <h2 className='text-center mt-3 mb-10 text-2xl sm:text-4xl font-bold'> {/* Adjusted heading size */}
          Our Approach is <span className='pb_text_red'>Uniquely Different.</span>
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> {/* Added responsive grid */}

            {/* Reusable Card Component */}
            <Card
              icon={<FaGraduationCap className='p-4 w-20 h-20 rounded-full pb_bg_ylw text-red-600' />}
              title="1. Personalized Learning Approach"
              description="Unlike traditional coaching centres, Aspiration Academy customizes study plans and teaching methods based on each student's strengths and weaknesses."
              bgColor="#e5f4fc"
            />
            <Card
              icon={<FaChalkboardTeacher className='p-4 w-20 h-20 rounded-full pb_bg_ylw text-red-600' />}
              title="2. Expert Faculty"
              description="The academy boasts a team of highly qualified and experienced faculty who have consistently guided students to top ranks in JEE & NEET."
              bgColor="#fcf0ea"
            />
            <Card
              icon={<FaLightbulb className='p-4 w-20 h-20 rounded-full pb_bg_ylw text-red-600' />}
              title="3. Innovative Teaching Techniques"
              description="With a blend of smart classes, conceptual learning, and real-world applications, the academy ensures deep understanding rather than rote memorization."
              bgColor="#fffceb"
            />
            <Card
              icon={<FaBook className='p-4 w-20 h-20 rounded-full pb_bg_ylw text-red-600' />}
              title="4. Comprehensive Study Material & Test Series"
              description="Students get meticulously designed study materials and regular mock tests that simulate real exam conditions, boosting confidence and performance."
              bgColor="#daead3"
            />
            <Card
              icon={<FaUsers className='p-4 w-20 h-20 rounded-full pb_bg_ylw text-red-600' />}
              title="5. Small Batch Size for Individual Attention"
              description="Maintaining limited students per batch allows personalized mentoring and doubt-clearing sessions, ensuring better understanding."
              bgColor="#f1e9f7"
            />
            <Card
              icon={<FaBrain className='p-4 w-20 h-20 rounded-full pb_bg_ylw text-red-600' />}
              title="6. Motivational & Psychological Support"
              description="Beyond academics, Aspiration Academy provides mentorship, stress management sessions, and regular motivation to keep students focused and positive."
              bgColor="#e6eced"
            />

          </div>
        </div>

      </div>
    </div>

  );
};

// Card Component
const Card = ({ icon, title, description, bgColor }) => {
  return (
    <div style={{ background: bgColor }} className="p-4 sm:p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"> {/* Added hover effect */}
      <div className="flex flex-col items-start gap-3"> {/* Removed space-x-4 */}
        <span>
          {icon}
        </span>

        <div>
          <h5 className="text-xl font-semibold">{title}</h5>
          <p className="mt-2 text-sm sm:text-base"> {/* Added responsive text size */}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;