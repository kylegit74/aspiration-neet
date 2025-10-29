import MainLayout from "../layouts/MainLayout"

function ThankYou() {

    return (
        <MainLayout>
        <div class="min-h-screen flex items-center justify-center  py-6">
            <div class="bg-white/95 rounded-2xl shadow-2xl p-10 text-center mt-10 max-w-xl w-full">
                <div class="flex justify-center mb-6 mt-10">
                    <div class="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400 shadow-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h1 class="text-3xl sm:text-4xl font-bold text-red-600 mb-3">Thank You!</h1>
                <p class="text-gray-700 text-lg mb-6">Your message has been successfully sent. Our team will get back to you shortly.</p>
                <a href="https://aspirationjeeneet.in" class="inline-block  text-[20px] bg-yellow-400 text-black  font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">Return to Home</a>
            </div>
        </div>
       </MainLayout>
    )
}
export default ThankYou