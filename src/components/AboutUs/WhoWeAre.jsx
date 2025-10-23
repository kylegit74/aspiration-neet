import { GraduationCap, School } from "lucide-react";
import students from "../../Imagesall/students.jpg";

const WhoWeAre = () => {
  return (
    <div className="relative overflow-hidden px-4 py-16  sm:px-6 lg:px-8 mt-[90px] z-[-100px]">
      {/* Decorative circles */}
      <div className="absolute -left-20 top-24  h-28 w-28 rounded-full bg-yellow-200/60" />
      <div className="absolute -left-[87px] top-[79px] h-36 w-36 scale-125 rounded-full bg-red-200/60" />
      <div className="absolute -top-72 right-0 h-96 w-96 rounded-full bg-yellow-100/60" />

      {/* who we are*/}
      <div className="relative z-[-100px] mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="relative inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400" />
          </h1>
        </div>

        {/* Content grid */}
        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 space-y-6 text-gray-600 lg:prose-xl">
            {/* Black Card */}
            <div className="rounded-lg bg-black p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">
                  Know About Us
                </h3>
              </div>
              <p className="leading-relaxed text-gray-300">
                <strong>Aspiration JEE & NEET Academy</strong> is dedicated to
                shaping the future of aspiring engineers and medical
                professionals. Our academy provides a structured and
                results-driven approach to help students excel in{" "}
                <strong>JEE (Main & Advanced)</strong> and <strong>NEET</strong>{" "}
                examinations.
                <br />
              </p>
            </div>

            {/* Red Card */}
            <div className="rounded-lg pb_bg_red p-6 shadow-lg transition-all hover:shadow-xl">
              <div className="mb-4 flex items-center">
                <School className="mr-3 h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white">What We Do</h3>
              </div>
              <p className="leading-relaxed text-white">
                At <strong>Aspiration JEE & NEET Academy</strong>, we specialize
                in guiding students towards excellence in engineering and
                medical entrance exams. Our expert faculty members provide a
                structured and strategic approach to mastering{" "}
                <strong>Physics, Chemistry, Biology, and Mathematics</strong>.
                <br />
                <br />
                </p>
            </div>
          </div>

          {/* Image section */}
          <div className="flex-1 mt-[-38px]">
            <div className="overflow-hidden rounded-2xl shadow-2xl transition-all hover:shadow-3xl">
              <img
                src={students}
                alt="Students studying"
                className="h-full w-full object-fit transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
