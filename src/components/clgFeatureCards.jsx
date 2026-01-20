// eslint-disable-next-line
import { motion } from "framer-motion";
import { CustomIcon } from "./IconComponent";

export default function ClgFeatureCards() {
  const items = [
    { title: "Our Vision", desc: "Providing quality education and holistic development for every student." },
    { title: "Community", desc: "Strong student–teacher collaboration and vibrant campus life." },
    { title: "Innovation", desc: "Projects like Student Performance Tracker and modern digital classrooms." },
    { title: "Facilities", desc: "Well-equipped library, computer labs, sports grounds, and cultural centers." },
    { title: "Achievements", desc: "Our students excel in academics, research, and extracurricular activities." },
    { title: "Future Goals", desc: "Expanding global collaborations and introducing advanced courses." },
  ];

  return (
    <section id="about" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* --- Fixed About Us Title --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            About <span className="text-blue-600">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-500 mt-6 font-medium max-w-3xl mx-auto text-lg leading-relaxed px-4"
          >
            "Dedicated to excellence in education and fostering an environment where innovation meets tradition to shape the leaders of tomorrow."
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-blue-600 mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 text-center"
            >
              {/* Subtle Glow Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>

              <div className="relative z-10">
                {/* Icon Container with Floating Animation */}
                <motion.div
                  className="flex justify-center mb-6"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CustomIcon type={item.title} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/3 transition-all duration-500 rounded-t-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}