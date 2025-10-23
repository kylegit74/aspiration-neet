import { BookOpen, Target, Users } from 'lucide-react'

function OurMission() {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert Faculty',
      description: 'Learn from field specialists',
    },
    {
      icon: Target,
      title: 'Focused Approach',
      description: 'Targeted preparation strategy',
    },
    {
      icon: Users,
      title: 'Personal Guidance',
      description: 'Individual attention & support',
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-yellow-100/50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 -z-10 h-40 w-40 rounded-full bg-yellow-200/30 blur-3xl sm:h-64 sm:w-64"></div>
      <div className="absolute right-0 top-1/2 -z-10 h-60 w-60 rounded-full bg-yellow-100/40 blur-3xl sm:h-96 sm:w-96"></div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-2 sm:px-4">
        {/* Heading */}
        <div className="text-center">
          <h1 className="relative inline-block text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Our Mission
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400"></div>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-gray-600 sm:max-w-2xl sm:text-lg">
            Empowering aspirants with knowledge, strategy, and confidence to excel in JEE & NEET examinations
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-10 flex flex-col gap-6 md:gap-12 lg:flex-row lg:items-center">
          {/* Image section */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-2xl">
              {/** this is a image address i did not download any iamge */}
              <img
                src="https://t4.ftcdn.net/jpg/05/18/65/75/360_F_518657595_keQdDMCfv8SgYvjOgPMe8BCx7hkuplIf.jpg"
                alt="Students in classroom"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-72 md:h-96"
              />
            </div>

            {/* Feature cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-3 text-center cursor-pointer transition-all hover:shadow-xl sm:p-4"
                  >
                    <Icon className="mx-auto h-5 w-5 text-yellow-500 sm:h-6 sm:w-6" />
                    <h3 className="mt-2 text-sm font-semibold text-gray-900 sm:text-base">{feature.title}</h3>
                    <p className="mt-1 text-xs text-gray-600 sm:text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            <div className="rounded-xl bg-white p-4 transition-all hover:shadow-xl cursor-pointer sm:p-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">Strategic Approach</h2>
              <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                We believe in preparing our students not just for examinations, but for their future careers. Our approach
                combines theoretical knowledge with practical insights, ensuring that aspirants develop a holistic understanding
                of their subjects while mastering examination techniques.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 transition-all hover:shadow-xl cursor-pointer sm:p-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">Future-Ready Training</h2>
              <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                Beyond exam preparation, we focus on developing essential skills that will serve our students throughout their
                careers. Our program emphasizes critical thinking, problem-solving, and leadership qualities that are crucial
                for success in JEE & NEET.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
