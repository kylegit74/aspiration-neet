
import { 
  GraduationCap, 
  School, 
  BookOpen, 
  ClipboardCheck, 
  Users, 
  Lightbulb, 
  Trophy 
} from "lucide-react";


const WhyChooseUsHeading = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br z-[-100] from-yellow-100 via-yellow-50 to-white px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-20 mt-[80px]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-transparent to-yellow-100/20"></div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-10 sm:gap-12 items-center">
        {/* Left Side - Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Choose Us?
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            At Aspiration JEE & NEET Academy, we are committed to delivering
            top-tier education through expert faculty, advanced learning
            methods, and a results-driven approach. Our structured programs are
            designed to help students excel in competitive exams with
            confidence.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 hidden md:block">
            <div className="flex items-center lg:justify-start gap-4">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <p className="text-gray-800 font-medium text-sm sm:text-lg">
                Expert Faculty with Proven Track Records
              </p>
            </div>
            <div className="flex items-center  lg:justify-start gap-4">
              <School className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <p className="text-gray-800 font-medium text-sm sm:text-lg">
                Modern Learning Infrastructure with Smart Classrooms
              </p>
            </div>
            <div className="flex items-center  lg:justify-start gap-4">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <p className="text-gray-800 font-medium text-sm sm:text-lg">
                Comprehensive Study Material Covering Full Syllabus
              </p>
            </div>
            <div className="flex items-center  lg:justify-start gap-4">
              <ClipboardCheck className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <p className="text-gray-800 font-medium text-sm sm:text-lg">
                Regular Mock Tests & Performance Analysis
              </p>
            </div>
            <div className="flex items-center lg:justify-start gap-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />
              <p className="text-gray-800 font-medium text-sm sm:text-lg">
                Personalized Mentorship & Doubt-Solving Sessions
              </p>
            </div>
           
            
          </div>

          {/* CTA Button */}
         {/*<a
            href="#services"
            className="inline-block mt-6 px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold bg-yellow-500 text-gray-900 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Learn More
          </a>*/}
        </div>

        {/* Right Side - Image */}
        <div className="w-full overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            className="w-full h-60 sm:h-72 md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            alt="Education"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHeading;
