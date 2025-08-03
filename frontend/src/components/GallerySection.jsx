import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import myImage from '../assets/farmer.jpg';
import Delhi from '../assets/delhi.png';
import road from '../assets/pune.jpg';
import forest from '../assets/hyderabad.png';

const slides = [
  {
    id: 1,
    title: "A Voice for Agricultural Rights",
    content: "CivicSpark can support the Farmer Protest by helping organize and mobilize communities. Through micro-campaigns, users can raise awareness, share petitions, and plan rallies to advocate for farmers' rights. The platform enables tracking of issues, organizing local events, and connecting activists, farmers, and local governments.",
    image: myImage,
    location: "Punjab, India",
    participants: "50K+ Farmers",
    date: "March 2024",
    impact: "Policy Changes Achieved",
    category: "Agriculture"
  },
  {
    id: 2,
    title: "Hyderabad's Forest Preservation Victory",
    content: "In January 2025, deforestation in Hyderabad's Kancha Gachibowli for IT parks ignited student protests. Satellite imagery revealed rapid forest loss, fueling public outrage. On March 3, 2025, the Supreme Court intervened, halting construction and preserving 600 acres of forest.",
    image: forest,
    location: "Hyderabad, Telangana",
    participants: "25K+ Students",
    date: "January 2025",
    impact: "600 Acres Preserved",
    category: "Environment"
  },
  {
    id: 3,
    title: "Delhi's Neighborhood Safety Patrols",
    content: "In February 2025, rising nighttime crime in Delhi's Kalkaji area prompted residents to initiate community patrols. Over 200 volunteers participated, reducing crime incidents by 15%. The success led to the police adopting the model citywide.",
    image: Delhi,
    location: "Delhi, India",
    participants: "200+ Volunteers",
    date: "February 2025",
    impact: "15% Crime Reduction",
    category: "Safety"
  },
  {
    id: 4,
    title: "Pune's Elderly Care Initiative",
    content: "In April 2025, neglect towards Pune's elderly in Kothrud sparked volunteers to create care programs for 1,000 seniors. Free health camps and social events were organized by March, addressing physical and emotional well-being.",
    image: road,
    location: "Pune, Maharashtra",
    participants: "1K+ Seniors",
    date: "April 2025",
    impact: "Comprehensive Care Program",
    category: "Healthcare"
  },
];

const categoryColors = {
  Agriculture: "from-green-500 to-emerald-600",
  Environment: "from-teal-500 to-cyan-600",
  Safety: "from-blue-500 to-indigo-600",
  Healthcare: "from-purple-500 to-pink-600"
};

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Civic Surge Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the power of community action through real stories of change, 
            where ordinary citizens created extraordinary impact across India.
          </p>
        </motion.div>

        {/* Main Gallery Card */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-white backdrop-blur-lg border border-white/20"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]"
              >
                {/* Content Side */}
                <div className="flex flex-col justify-center p-8 lg:p-12 order-2 lg:order-1">
                  {/* Category Badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 w-fit bg-gradient-to-r ${categoryColors[currentSlideData.category]}`}
                  >
                    {currentSlideData.category}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight"
                  >
                    {currentSlideData.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                  >
                    {currentSlideData.content}
                  </motion.p>

                  {/* Stats Grid */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                  >
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200/50">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Location</p>
                        <p className="text-gray-900 font-semibold">{currentSlideData.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Participants</p>
                        <p className="text-gray-900 font-semibold">{currentSlideData.participants}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Timeline</p>
                        <p className="text-gray-900 font-semibold">{currentSlideData.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl border border-pink-200/50">
                      <ArrowRight className="w-5 h-5 text-pink-600" />
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Impact</p>
                        <p className="text-gray-900 font-semibold">{currentSlideData.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className="relative h-[400px] lg:h-full order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-12 h-3 bg-gradient-to-r from-emerald-500 to-blue-600" 
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to create your own success story?
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:from-emerald-600 hover:to-blue-700">
            Start Your Campaign
          </button>
        </motion.div>
      </div>
    </section>
  );
}
