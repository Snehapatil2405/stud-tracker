// eslint-disable-next-line
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

const SvgWrapper = ({ children, color }) => (
  <div className={`p-5 rounded-2xl bg-gradient-to-br ${color} shadow-inner mb-4`}>
    <motion.svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.svg>
  </div>
);

export const CustomIcon = ({ type }) => {
  switch (type) {
    case "Our Vision":
      return (
        <SvgWrapper color="from-blue-500 to-cyan-400">
          <motion.path variants={iconVariants} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <motion.circle variants={iconVariants} cx="12" cy="12" r="3" />
        </SvgWrapper>
      );
    case "Community":
      return (
        <SvgWrapper color="from-emerald-500 to-teal-400">
          <motion.path variants={iconVariants} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <motion.circle variants={iconVariants} cx="9" cy="7" r="4" />
          <motion.path variants={iconVariants} d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <motion.path variants={iconVariants} d="M16 3.13a4 4 0 0 1 0 7.75" />
        </SvgWrapper>
      );
    case "Innovation":
      return (
        <SvgWrapper color="from-amber-400 to-orange-500">
          <motion.path variants={iconVariants} d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
          <motion.path variants={iconVariants} d="M9 18h6" />
          <motion.path variants={iconVariants} d="M10 22h4" />
        </SvgWrapper>
      );
    case "Facilities":
      return (
        <SvgWrapper color="from-purple-500 to-indigo-600">
          <motion.path variants={iconVariants} d="M3 21h18" />
          <motion.path variants={iconVariants} d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3" />
          <motion.path variants={iconVariants} d="M19 21v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4" />
        </SvgWrapper>
      );
    case "Achievements":
      return (
        <SvgWrapper color="from-yellow-400 to-orange-600">
          <motion.path variants={iconVariants} d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <motion.path variants={iconVariants} d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <motion.path variants={iconVariants} d="M4 22h16" />
          <motion.path variants={iconVariants} d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <motion.path variants={iconVariants} d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <motion.path variants={iconVariants} d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </SvgWrapper>
      );
    case "Future Goals":
      return (
        <SvgWrapper color="from-pink-500 to-rose-600">
          <motion.path variants={iconVariants} d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <motion.path variants={iconVariants} d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <motion.path variants={iconVariants} d="M9 12H4s.5-1 1-4c1.5 0 3 .5 3 .5L9 12z" />
          <motion.path variants={iconVariants} d="M12 15v5s1-.5 4-1c0-1.5-.5-3-.5-3L12 15z" />
        </SvgWrapper>
      );

       // --- New Course Icons (BA, B.Com, MCA etc.) ---
    case "BA": case "MA":
      return (
        <SvgWrapper color="from-orange-400 to-red-500">
          <motion.path variants={iconVariants} d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-5H20" />
          <motion.path variants={iconVariants} d="M8 7h8" />
          <motion.path variants={iconVariants} d="M8 11h8" />
        </SvgWrapper>
      );
    case "B.Com":
      return (
        <SvgWrapper color="from-emerald-500 to-green-600">
          <motion.path variants={iconVariants} d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </SvgWrapper>
      );
    case "B.Sc":
      return (
        <SvgWrapper color="from-purple-500 to-pink-500">
          <motion.path variants={iconVariants} d="M12 2l4 4-4 4M8 10l-4-4 4-4M12 22v-10M18 22v-10M6 22v-10" />
          <motion.path variants={iconVariants} d="M22 22H2" />
        </SvgWrapper>
      );
    case "BBA":
      return (
        <SvgWrapper color="from-blue-500 to-indigo-600">
          <motion.rect variants={iconVariants} x="2" y="7" width="20" height="14" rx="2" />
          <motion.path variants={iconVariants} d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </SvgWrapper>
      );
    case "BCA": case "BCS": case "MCA": case "DIT":
      return (
        <SvgWrapper color="from-cyan-500 to-blue-600">
          <motion.path variants={iconVariants} d="m18 16 4-4-4-4" />
          <motion.path variants={iconVariants} d="m6 8-4 4 4 4" />
          <motion.path variants={iconVariants} d="m14.5 4-5 16" />
        </SvgWrapper>
      );
    
      
    default:
      return null;
  }
};

