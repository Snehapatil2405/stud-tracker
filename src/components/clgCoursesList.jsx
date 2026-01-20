// eslint-disable-next-line
import { motion } from "framer-motion";
import {
  GraduationCap, Users, Clock, ArrowRight, Star,
  BookOpen, Code, Database, Microscope, Building2,
  Calculator, Laptop, Briefcase, FileCode
} from "lucide-react";

export default function CoursesList() {
  const courses = [
    {
      title: "BA",
      icon: <BookOpen size={24} />,
      duration: "3 Years",
      intake: "120 Seats",
      desc: "Literature and Social Sciences.",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "MA",
      icon: <Building2 size={24} />,
      duration: "2 Years",
      intake: "60 Seats",
      desc: "Advanced research in Arts.",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "B.Com",
      icon: <Calculator size={24} />,
      duration: "3 Years",
      intake: "120 Seats",
      desc: "Finance and Accountancy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "B.Sc",
      icon: <Microscope size={24} />,
      duration: "3 Years",
      intake: "120 Seats",
      desc: "Pure Science and Research.",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "BBA",
      icon: <Briefcase size={24} />,
      duration: "3 Years",
      intake: "60 Seats",
      desc: "Business Management.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "BCA",
      icon: <Code size={24} />,
      duration: "3 Years",
      intake: "60 Seats",
      desc: "Web & App Development.",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "BCS",
      icon: <Database size={24} />,
      duration: "3 Years",
      intake: "60 Seats",
      desc: "Logic and Systems.",
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "DIT",
      icon: <Laptop size={24} />,
      duration: "1 Year",
      intake: "40 Seats",
      desc: "Essential IT Skills.",
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "MCA",
      icon: <FileCode size={24} />,
      duration: "2 Years",
      intake: "60 Seats",
      desc: "Advanced Engineering.",
      color: "from-blue-700 to-indigo-900"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-[#f8fafc] relative overflow-hidden">

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- Fixed Academic Programs Title --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            Academic <span className="text-blue-600">Programs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-500 mt-6 font-medium max-w-3xl mx-auto text-lg leading-relaxed px-4"
          >
            "Empowering students through diverse educational paths, fostering innovation, and providing the skills needed to excel in a global landscape."
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-blue-600 mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          />
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full bg-white border border-slate-100 p-8 rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.15)] hover:border-blue-300">

                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* SPECIFIC ANIMATED ICON */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg group-hover:shadow-blue-200 transition-all duration-300`}
                    >
                      {course.icon}
                    </motion.div>

                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-500">
                      <Clock size={12} className="text-blue-500" />
                      {course.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">
                    {course.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors font-medium">
                    {course.desc}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase leading-none mb-1">Intake</p>
                      <p className="text-slate-800 font-extrabold">{course.intake}</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-blue-600 font-bold text-sm"
                  >
                    Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}