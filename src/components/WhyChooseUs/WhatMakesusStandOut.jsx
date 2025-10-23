import { CheckCircle, Star, BookOpen, Users, Award, ShieldCheck } from "lucide-react";

const WhatMakesUsStandOut = () => {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-yellow-500" />, 
      title: "Expert Faculty", 
      description: "Learn from experienced educators who have guided thousands of students to success."
    },
    {
      icon: <Star className="h-10 w-10 text-yellow-500" />, 
      title: "Proven Track Record", 
      description: "Our students consistently achieve top ranks in competitive exams."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-yellow-500" />, 
      title: "Comprehensive Study Material", 
      description: "Get access to well-researched and up-to-date study materials tailored for your success."
    },
    {
      icon: <Users className="h-10 w-10 text-yellow-500" />, 
      title: "Personalized Mentorship", 
      description: "One-on-one guidance to help you overcome your unique challenges."
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-500" />, 
      title: "Success-Oriented Approach", 
      description: "Our strategic methodology ensures that you stay ahead in your preparation."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-yellow-500" />, 
      title: "Trusted by Thousands", 
      description: "Join a community of successful aspirants who trust our expertise."
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-white to-yellow-50/30 px-6 py-16 text-center">
      <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Makes Us Stand Out</h3>
      <p className="mt-4 text-lg text-gray-600">Discover the key reasons why students choose us for their journey to success.</p>
      
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatMakesUsStandOut;