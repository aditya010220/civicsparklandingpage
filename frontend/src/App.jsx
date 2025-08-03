import GallerySection from "./components/GallerySection";
import QuotesCarousel from "./components/QuotesCarousel";
import WhyUsSection from "./components/WhyUsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import { UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog"

export default function App() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <main className="min-h-screen">
      <section id="home" className="relative min-h-[80vh] w-full bg-white">
        {/* Modern Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/30 shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              
              {/* Logo Section - Enhanced */}
              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    CivicSpark
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Empowering Communities</p>
                </div>
              </div>

              {/* Navigation Links - Enhanced */}
              <ul className="hidden md:flex items-center space-x-8">
                <li>
                  <a href="#home" className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <Dialog>
                    <DialogTrigger>
                      <span className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group cursor-pointer">
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </DialogTrigger>

                    <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

                    <DialogContent className="backdrop-blur-sm border-0 shadow-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-center font-bold text-2xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                          Contact Us
                        </DialogTitle>
                        <DialogDescription className="text-center text-gray-500 text-sm mb-6">
                          Get in touch with our team. We'd love to hear from you!
                        </DialogDescription>
                        
                        <form className="flex flex-col gap-5">
                          <div className="flex flex-col text-left">
                            <label className="text-sm font-semibold mb-2 text-gray-700">Name</label>
                            <input
                              type="text"
                              placeholder="Your full name"
                              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                            />
                          </div>

                          <div className="flex flex-col text-left">
                            <label className="text-sm font-semibold mb-2 text-gray-700">Email</label>
                            <input
                              type="email"
                              placeholder="your.email@example.com"
                              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                            />
                          </div>

                          <div className="flex flex-col text-left">
                            <label className="text-sm font-semibold mb-2 text-gray-700">Message</label>
                            <textarea
                              placeholder="How can we help you today?"
                              rows="4"
                              className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white p-3 rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            Send Message
                          </button>
                        </form>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </li>
              </ul>

              {/* Login Button - Enhanced */}
              <button 
                onClick={handleLogin}
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 relative z-10">
                  <UserRound size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Login</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-6">
          {/* Quotes Carousel Section */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <QuotesCarousel />
          </div>
        </div>
      </section>
      
      <GallerySection />
      <section id="about">
        <WhyUsSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <Footer />
    </main>
  );
}
