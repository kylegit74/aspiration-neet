import { Lightbulb, Target, Trophy, ArrowUpRight } from 'lucide-react'

function OurVision() {
  const visionPoints = [
    {
      icon: Lightbulb,
      title: 'Innovation in Learning',
      description: 'Pioneering new methods of education that combine traditional wisdom with modern techniques',
    },
    {
      icon: Target,
      title: 'Excellence First',
      description: 'Setting the highest standards in  JEE & NEET coaching and preparation',
    },
    {
      icon: Trophy,
      title: 'Creating Leaders',
      description: 'Shaping tomorrow',
    },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-yellow-50/30 px-4 py-16 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-24 z-[-20px] h-28 w-28 rounded-full bg-yellow-200/60" />
      <div className="absolute -left-[87px] top-[79px] h-36 w-36 scale-125 rounded-full bg-red-200/60" />
      <div className="absolute -top-72 right-0 h-96 w-96 rounded-full bg-yellow-100/60" />

      <div className="relative z-[-30px] mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="relative inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Vision
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400" />
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Empowering aspirants with knowledge, strategy, and confidence to excel in JEE & NEET examinations
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Vision points */}
          <div className="flex-1 space-y-8">
            {visionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="group relative rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className=" sm:flex sm:items-start gap-4">
                    <div className="rounded-lg bg-yellow-100 p-3">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="flex items-center text-xl font-semibold text-gray-900">
                        {point.title}
                        
                      </h3>
                      <p className="mt-2 text-gray-600">{point.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Image and quote section */}
          <div className="flex-1 space-y-8 mt-[10px]">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80"
                alt="Vision"
                className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurVision