import { Mail, Phone, MapPin, Send } from 'lucide-react';
{/* Responsive done*/ }
function Form() {
  return (
    <div className="relative overflow-hidden mt-[100px] bg-gradient-to-br from-white to-yellow-50/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-[-20px] mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="relative inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-20 bg-yellow-400" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Get in touch with us for any queries about our courses or admission process.
          </p>
        </div>

        {/* Contact Info & Form Container */}
        <div className="mt-16 flex flex-col justify-center lg:flex-row gap-6 lg:gap-10 items-center lg:items-stretch">
          {/* Contact Information */}
          <div className="w-full max-w-lg rounded-xl bg-white p-6 sm:p-8 shadow-lg flex flex-col text-center sm:text-left">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, title: 'Phone', content: '+91 9998069806 / 9998029802' },

                { icon: Mail, title: 'Email', content: 'aspirationiasacademy@gmail.com' },
                { icon: MapPin, title: 'Address', content: 'BC-16, Street Number 113, Action Area I, Newtown, Kolkata, WB 700163' },


              ].map(({ icon: Icon, title, content }, index) => (

                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center justify-start sm:justify-center w-10 h-10 rounded-lg lg:bg-yellow-100">
                    <Icon className="h-6 w-6 text-yellow-600" />
                  </div>

                  {title === 'Address' ? <div className="text-left ml-4">
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{content}</p>
                  </div> : <div className="text-left">
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-gray-600 text-sm sm:text-base">{content}</p>
                  </div>}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full max-w-lg rounded-xl bg-white p-6 sm:p-8 shadow-lg flex flex-col" action="https://admin.aspirationjeeneet.in/manage/contact_form"
            method="POST">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mt-2 ">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  placeholder="Course Inquiry"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mt-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-yellow-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 mt-4"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
